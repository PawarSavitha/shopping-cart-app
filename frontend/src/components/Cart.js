import React, { useState, useEffect } from 'react';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('/cart')
            .then(res => res.json())
            .then(data => setCartItems(data));
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map(item => (
                <div key={item.product_id}>
                    <p>Product ID: {item.product_id}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
