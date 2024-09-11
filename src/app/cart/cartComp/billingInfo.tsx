import React from 'react';
import '../../css/Cart.css'; // Ensure you are importing the CSS

const CartTotals: React.FC<{ subtotal: number }> = ({ subtotal }) => {
    const total = subtotal;

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
                    <strong>${total.toFixed(2)}</strong>
                </div>
            </div>
            <div className="cart-totals-buttons">
                <button className="update-cart-btn">Update Cart</button>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartTotals;
