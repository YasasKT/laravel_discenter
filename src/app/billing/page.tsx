"use client"
import React, { useState } from 'react';
import '../css/Billing.css'; // Ensure the correct CSS file is imported

import BillingForm from './billingComp/billingAddressFrom';
import DeliveryMethod from './billingComp/deliveryMeth'; // Ensure correct import path
import OrderSummary from './billingComp/orderSum'; // Ensure correct import path

const CheckoutPage: React.FC = () => {
    const [deliverToDifferentAddress, setDeliverToDifferentAddress] = useState(false);

    const handleCheckboxChange = () => {
        setDeliverToDifferentAddress(!deliverToDifferentAddress);
    };

    return (
        <div className="checkout-page">
            {/* Billing Section (Left Side) */}
            <div className="billing-section">
                <h2>Billing Details</h2>

                {/* Billing Form */}
                <BillingForm isShippingForm={false} />

                {/* Checkbox for different shipping address */}
                <div className="different-address-checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={deliverToDifferentAddress} 
                            onChange={handleCheckboxChange} 
                        />
                        Deliver to a different address?
                    </label>
                </div>

                {/* Shipping form, conditionally rendered if checkbox is checked */}
                {deliverToDifferentAddress && (
                    <BillingForm isShippingForm={true} />
                )}

                {/* Proceed to Checkout Button */}
                <a href='/checkout'>
                    <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
                </a>
            </div>

            {/* Right Side: Delivery Method and Order Summary */}
            <div className="checkout-summary">
                <DeliveryMethod />
                <OrderSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
