import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RestaurantListPage from './pages/RestaurantListPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/restaurants" component={RestaurantListPage} />
                <Route path="/menu/:restaurantId" component={MenuPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/order" component={OrderPage} />
            </Routes>
        </Router>
    );
};

export default App;