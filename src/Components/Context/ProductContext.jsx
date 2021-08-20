import React from 'react';
import axios from 'axios';
import { API } from '../Helpers/Constants';
import { useReducer } from 'react';


export const ProductContext = React.createContext()

const INIT_STATE = {
    products: [],
    edit: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload
            }
        case "GET_EDIT_PRODUCT":
            return {
                ...state, edit: action.payload
            }
        default: return state
    }
}



const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        let { data } = await axios(API)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const addProduct = async (newProduct) => {
        try {
            let res = await axios.post(API, newProduct)
            return res
        }
        catch (err) {
            console.log(err)
            return err
        }
    }

    const editProduct = async (id) => {
        const { data } = await axios.get(`${API}/${id}`)
        dispatch({
            type: "GET_EDIT_PRODUCT",
            payload: data
        })
    }

    const saveEditProduct = async (editedProduct) => {
        try {
            let res = await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
            return res
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id, history) => {
        await axios.delete(`${API}/${id}`)
        getProducts(history)
    }


    return (
        <ProductContext.Provider value={{
            products: state.products,
            edit: state.edit,
            getProducts,
            addProduct,
            editProduct,
            saveEditProduct,
            deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;