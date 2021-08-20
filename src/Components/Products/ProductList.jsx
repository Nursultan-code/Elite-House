import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ProductCard from './ProductCard';

import { Pagination } from '@material-ui/lab';
// import { getPage } from '../helpers/function';
import { ProductContext } from '../Context/ProductContext';


const useStyles = makeStyles((theme) => ({
    pag: {
        color: 'white',

    }
}))
const ProductsList = () => {
    const classes = useStyles()
    const history = useHistory()
    const { products, getProducts, paginatedPages } = useContext(ProductContext)
    // const [page, setPage] = useState(getPage())
    console.log(products);
    useEffect(() => {
        getProducts(history)
    }, [])

    // function getPage(e, page) {
    //     const search = new URLSearchParams(history.location.search)
    //     if (!search.get('_page')) {
    //         return
    //     }
    //     return search.get('_page')
    // }

    // const handlePage = (e, pageVal) => {
    //     const search = new URLSearchParams(window.location.search)
    //     search.set('_page', pageVal)
    //     history.push(`${history.location.pathname}?${search.toString()}`)
    //     getTours(history)
    //     setPage(pageVal)
    // }

    return (
        <>
            <Grid container spacing={3} justify="space-evenly" style={{ marginTop: '90px' }}>
                {
                    products ? (
                        products.map((item, index) => (
                            <ProductCard item={item} key={index} />
                        ))
                    ) : (<h1>Please wait...</h1>)
                }
            </Grid>

            <div
                style={{
                    paddingTop: '30px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'

                }}
            >

                {/* <Pagination className={classes.pag}
                    variant="outlined"
                    count={paginatedPages}
                    color='secondary'
                    onChange={handlePage}
                    page={+page}
                /> */}
            </div>

        </>
    );
};

export default ProductsList;