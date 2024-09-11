import React from 'react';
import '../../css/Billing.css';

const DeliveryMethod: React.FC = () => {
    return (
        <div className="delivery-method">
            <h3>Select Delivery Method</h3>
            <div className="form-group">
                <label>
                    <input type="radio" name="delivery" value="standard" defaultChecked />
                    Standard Delivery (3-5 days)
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input type="radio" name="delivery" value="express" />
                    Express Delivery (1-2 days)
                </label>
            </div>
        </div>
    );
};

export default DeliveryMethod;
