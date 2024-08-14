import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
