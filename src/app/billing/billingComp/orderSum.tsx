import React from 'react';
import '../../css/Billing.css';

const OrderSummary: React.FC = () => {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-item">
                <span>Subtotal</span>
                <span>$100.00</span>
            </div>
            <div className="order-item">
                <span>Shipping</span>
                <span>$5.00</span>
            </div>
            <div className="order-item total">
                <strong>Total</strong>
                <strong>$105.00</strong>
            </div>
        </div>
    );
};

export default OrderSummary;
