import React, { useState, useEffect } from 'react';
import '../../../css/Account.css';
import { User, Address } from '@/app/models/user';
import { fetchUser } from '@/app/network/account_api';

const Dashboard: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUser();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    const defaultBillingAddress = user.addressBook.find(addr => addr.title.toLowerCase() === 'billing');
    const defaultShippingAddress = user.addressBook.find(addr => addr.title.toLowerCase() === 'shipping');

    return (
        <div className="dashboard-container">
            <header className="account-header">
                <h1>Welcome, {user.name}</h1>
            </header>

            <div className="dashboard-flex-container">
                {/* Account Information Section */}
                <section className="dashboard-section">
                    <h2>Account Information</h2>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <button className="edit-button">Edit</button>
                </section>

                {/* Address Information Section */}
                <section className="address-info-section">
                    <h2>Address Information</h2>
                    <div className="address-flex-container">
                        {/* Billing Address */}
                        <div className="address-item">
                            <h3>Default Billing Address</h3>
                            {defaultBillingAddress ? (
                                <p>
                                    {defaultBillingAddress.address}, {defaultBillingAddress.city}, {defaultBillingAddress.state}, {defaultBillingAddress.postalCode}, {defaultBillingAddress.country}
                                </p>
                            ) : (
                                <p>No billing address set</p>
                            )}
                            <button className="add-address-button">Add/Edit Billing Address</button>
                        </div>
                        {/* Shipping Address */}
                        <div className="address-item">
                            <h3>Default Shipping Address</h3>
                            {defaultShippingAddress ? (
                                <p>
                                    {defaultShippingAddress.address}, {defaultShippingAddress.city}, {defaultShippingAddress.state}, {defaultShippingAddress.postalCode}, {defaultShippingAddress.country}
                                </p>
                            ) : (
                                <p>No shipping address set</p>
                            )}
                            <button className="add-address-button">Add/Edit Shipping Address</button>
                        </div>
                    </div>
                    {/* Manage Address Button */}
                    <button className="manage-address-button">Manage Addresses</button>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
