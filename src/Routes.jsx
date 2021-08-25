import React from 'react';
import Navbar from './Components/Header/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductContextProvider from './Components/Context/ProductContext';
import Add from './Components/Admin/Add';
import ProductsList from './Components/Products/ProductList';
import Edit from './Components/Admin/Edit';
import Favorites from './Components/Favorite/Favorite';
import Footer from './Components/content/Footer';

import Registration from './Components/Authorization/Registration';
import AuthContextProvider from './Components/Context/AuthContextProvider';
import Login from './Components/Authorization/Login';
import ProductDetail from './Components/Products/ProductDetail';
import Coments from './Components/Comments/Comments';
import ForgotPassword from './Components/Authorization/ForgotPassword';


const Routes = () => {
    return (
        <AuthContextProvider>

            <ProductContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/add' component={Add} />
                        <Route exact path='/list' component={ProductsList} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/favorite" component={Favorites} />

                        <Route exact path="/login" component={Login} />
                        <Route exact path="/registration" component={Registration} />

                        <Route exact path='/detail/:id' component={ProductDetail} />
                        <Route exact path='/comment' component={Coments} />
                        <Route exact path='/forgot' component={ForgotPassword} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ProductContextProvider>

        </AuthContextProvider >
    );
};

export default Routes;