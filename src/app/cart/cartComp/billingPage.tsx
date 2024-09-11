import React, { useState } from 'react';
import '../../css/Checkout.css'; // Ensure the correct CSS file is imported

import BillingForm from '../cartComp/billingForm'; // Create this form component
import DeliveryMethod from '../cartComp/deliveryMethod'; // Create this component
import OrderSummary from '../cartComp/orderSummary'; // Create this component

const CheckoutPage: React.FC = () => {
    const [deliverToDifferentAddress, setDeliverToDifferentAddress] = useState(false);

    const handleCheckboxChange = () => {
        setDeliverToDifferentAddress(!deliverToDifferentAddress);
    };

    return (
        <div className="checkout-page">
            <div className="billing-section">
                {/* Billing Form */}
                <BillingForm />
                
                {/* Checkbox for different address */}
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

                {/* Second form if deliverToDifferentAddress is checked */}
                {deliverToDifferentAddress && (
                    <BillingForm isShippingForm={true} />
                )}

                {/* Proceed button */}
                <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
            </div>

            {/* Right side: Delivery method and order summary */}
            <div className="checkout-summary">
                <DeliveryMethod />
                <OrderSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
