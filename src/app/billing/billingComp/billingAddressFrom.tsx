import React, { useState } from 'react';
import '../../css/Billing.css';

interface BillingFormProps {
    isShippingForm: boolean;
}

const BillingForm: React.FC<BillingFormProps> = ({ isShippingForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        province: '',
        city: '',
        phoneNumber: '',
        secondaryPhoneNumber: '',
        postalCode: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="billing-form">
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='input-row'>
                <div className="input-group">
                    <label htmlFor="province">Province</label>
                    <input
                        type="text"
                        name="province"
                        id="province"
                        placeholder="Province"
                        value={formData.province}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>
                {isShippingForm ? (
                    <div className="input-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            placeholder="Postal Code"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>
                ) : (
                    <div className="input-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                    </div>
                )}
            </div>

            <div className='input-row'>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="secondaryPhoneNumber">Secondary Phone Number</label>
                    <input
                        type="text"
                        name="secondaryPhoneNumber"
                        id="secondaryPhoneNumber"
                        placeholder="Secondary Phone Number"
                        value={formData.secondaryPhoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
                
        </div>
    );
};

export default BillingForm;
