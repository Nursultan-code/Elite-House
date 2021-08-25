import React from 'react';
import axios from 'axios';
import { API } from '../Helpers/Constants';
import { useReducer } from 'react';


export const ProductContext = React.createContext()

const INIT_STATE = {
    products: [],
    edit: null,
    paginatedPages: 1,
    favorites: [],
    detail: {}

}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 5)
            }
        case "GET_EDIT_PRODUCT":
            return {
                ...state, edit: action.payload
            }
        case "CHANGE_FAVORITES_COUNT":
            return {
                ...state, favorites: action.payload
            }
        case "GET_DETAIL_PRODUCT":
            return { ...state, detail: action.payload }
        default: return state
    }
}



const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 5)
        history.push(`${history.location.pathname}?${search.toString()}`)

        let data = await axios(`${API}/products${window.location.search}`)
        console.log(data, 'in context')
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const addProduct = async (newProduct) => {
        try {
            let res = await axios.post(`${API}/products`, newProduct)
            return res
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

    const editProduct = async (id) => {
        const { data } = await axios.get(`${API}/products/${id}`)
        dispatch({
            type: "GET_EDIT_PRODUCT",
            payload: data
        })
    }

    const saveEditProduct = async (editedProduct) => {
        try {
            let res = await axios.patch(`${API}/products/${editedProduct.id}`, editedProduct)
            return res
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id, history) => {
        await axios.delete(`${API}/products/${id}`)
        getProducts(history)
    }


    const addProductInFavorites = (product) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites) {
            favorites = {
                products: [],
            };
        }
        let newProduct = {
            item: product,
        };

        let productToFind = favorites.products.filter((item) => item.item.id === product.id);
        if (productToFind.length === 0) {
            favorites.products.push(newProduct);
        } else {
            favorites.products = favorites.products.filter((item) => item.item.id !== product.id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        dispatch({
            type: "CHANGE_FAVORITES_COUNT",
            payload: favorites,
        });
    }

    const getFavoritesLength = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                products: [],

            }
        }
        dispatch({
            type: "CHANGE_FAVORITES_COUNT",
            payload: favorites.product.length
        })
    }

    const getFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites) {
            localStorage.setItem(
                'favorites',
                JSON.stringify({
                    products: [],
                })
            );
            favorites = {
                products: [],
            };
        }
        dispatch({
            type: "CHANGE_FAVORITES_COUNT",
            payload: favorites,
        });
    };

    const checkProductinFavorites = (id) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                products: [],

            }
        }
        let newFavorites = favorites.products.filter(elem => elem.item.id === id)
        return newFavorites.length > 0 ? true : false
    }

    const getDetail = async (id) => {
        const { data } = await axios.get(`${API}/products/${id}`)
        dispatch({
            type: "GET_DETAIL_PRODUCT",
            payload: data
        })
    }


    return (
        <ProductContext.Provider value={{
            products: state.products,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            favorites: state.favorites,
            detail: state.detail,
            getProducts,
            addProduct,
            editProduct,
            saveEditProduct,
            deleteProduct,
            checkProductinFavorites,
            getFavorites,
            getFavoritesLength,
            addProductInFavorites,
            getDetail
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;