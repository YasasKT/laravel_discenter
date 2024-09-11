import React from 'react';
import '../../css/Checkout.css';

interface BillingFormProps {
    isShippingForm?: boolean; // Prop to indicate if it's the shipping form
}

const BillingForm: React.FC<BillingFormProps> = ({ isShippingForm = false }) => {
    return (
        <form className="billing-form">
            <h3>{isShippingForm ? 'Shipping Details' : 'Billing Details'}</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" required />
            </div>

            <div className="form-group">
                <label>Address</label>
                <input type="text" required />
            </div>

            {!isShippingForm && (
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" required />
                </div>
            )}

            <div className="form-group">
                <label>Province</label>
                <input type="text" required />
            </div>

            <div className="form-group">
                <label>City</label>
                <input type="text" required />
            </div>

            {isShippingForm && (
                <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" required />
                </div>
            )}

            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" required />
            </div>

            <div className="form-group">
                <label>Secondary Phone Number</label>
                <input type="text" />
            </div>
        </form>
    );
};

export default BillingForm;
