import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

function App() {
    const sampleProduct = {
        id: 1,
        name: 'Sample Product',
        description: 'This is a sample product.',
        price: 99.99,
    };
    return (
        <Router>
            <div className="App">
                <h1>Shopping Cart App</h1>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                </Routes>
                < ProductItem />
                < ProductList />
                < Checkout />
                <h1>Shopping Cart App</h1>
                <ProductItem product={sampleProduct} />
            </div>
        </Router>
    );

}

export default App;
