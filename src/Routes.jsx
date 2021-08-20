import React from 'react';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductContextProvider from './Components/Context/ProductContext';
import Add from './Components/Admin/Add';
import ProductsList from './Components/Products/ProductList';
import Edit from './Components/Admin/Edit';


const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add' component={Add} />
                    <Route exact path='/list' component={ProductsList} />
                    <Route exact path="/edit/:id" component={Edit} />
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;