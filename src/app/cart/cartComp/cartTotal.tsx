import React from 'react';
import '../../../css/Cart.css';

interface CartTotalsProps {
    subtotal: number;
}

const CartTotals: React.FC<CartTotalsProps> = ({ subtotal }) => {
    return (
        <div className="cart-section-right">
            <h2>CART TOTALS</h2>
            <div className="cart-totals-details">
                <div className="cart-totals-item">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-totals-item">
                    <strong>Total</strong>
                    <strong>${subtotal.toFixed(2)}</strong>
                </div>
            </div>
            <div className="cart-totals-buttons">
                <button className="update-cart-btn">Update Cart</button>
                <a href="/billing">
                    <button className="checkout-btn">Proceed to Checkout</button>
                </a>
            </div>
        </div>
    );
};

export default CartTotals;
