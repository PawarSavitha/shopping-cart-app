import React from 'react';

function ProductItem({ product }) {
    console.log('Product data:', product);

    if (!product) {
        return <div>No product data available</div>;
    }
    const addToCart = () => {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        fetch(`${backendUrl}/cart`, {  // Update the URL to match your Flask backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id: product.id, quantity: 1 }),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;
