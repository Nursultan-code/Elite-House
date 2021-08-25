
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../Context/ProductContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { calcTotalPrice } from '../Helpers/calcPrice';
import { Button, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        maxWidth: 1000,
        minWidth: '400px',
        margin: '40px auto',
        marginTop: '120px',
        backgroundColor: 'transparent'
    },
    title: {
        backgroundColor: '#4c4d4f'
    },
    paper5: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover!important",
        backgroundPosition: "center!important"
    }
});

const Favorites = () => {
    const classes = useStyles()
    const { favorites, getFavorites, changeProductCount } = useContext(ProductContext)

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <Paper className={classes.paper5}>
            <TableContainer style={{ backgroundColor: 'gray' }} component={Paper} className={classes.paper}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow className={classes.title}>
                            <TableCell style={{ color: 'white' }}>Image</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">Title</TableCell>
                            <TableCell style={{ color: 'white' }} align="right">Price</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {favorites.products ? (
                            <>
                                {favorites.products.map((elem) => (
                                    <TableRow key={elem.item.id}>
                                        <TableCell style={{
                                            color: 'white'
                                        }}><img style={{ width: "200px" }} src={elem.item.image} alt={elem.item.title} /></TableCell>
                                        <TableCell style={{
                                            color: 'white'
                                        }} align="right">{elem.item.title}</TableCell>
                                        <TableCell style={{
                                            color: 'white'
                                        }} align="right">{elem.item.price}</TableCell>

                                    </TableRow>
                                ))}
                            </>
                        ) : (<h1>Loading...</h1>)}

                        <TableRow>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
export default Favorites;