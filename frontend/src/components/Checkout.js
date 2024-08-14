import React from 'react';

function Checkout() {
    const checkout = () => {
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
    };

    return (
        <div>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}

export default Checkout;
