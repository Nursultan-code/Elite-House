import React, { useState, useContext } from 'react';
import { IconButton, Paper, TextField, makeStyles, Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';



const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto',
        marginTop: '100px'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        }
    }
}))

const Add = () => {
    const classes = useStyles()
    const history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        type: '',
        price: '',
        description: ''
    })

    const { addProduct } = useContext(ProductContext)
    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if (!values.image) values.image = "https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg"
        addProduct(values)
        history.push('/list')
    }



    return (
        <Paper elevation={3} className={classes.paper} >
            <h1 style={{ textAlign: 'center' }}>Добавить квартиру</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                <div>
                    <img style={{ height: '300px', width: '400px' }} src={values.image ? values.image : "https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg"} alt="Tour image" />
                </div>
                <div
                    style={{
                        width: "450px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <form className={classes.root} noValidate autoComplete='off'>
                        <TextField name='title' onChange={handleInp} value={values.title} variant='outlined' label="Название" />
                        <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label="Изображение" />
                        <TextField name='type' onChange={handleInp} value={values.type} variant='outlined' label="Тип" />
                        <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label="Цена" />
                        <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label="Описание" />
                    </form>
                    <IconButton onClick={handleSave}>
                        <Button variant="contained" color="secondary">Добавить</Button>
                    </IconButton>
                </div>
            </div>
        </Paper>
    );
};

export default Add;










