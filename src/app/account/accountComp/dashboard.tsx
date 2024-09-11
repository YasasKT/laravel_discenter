import React, { useState} from 'react';
import '../../css/Account.css';

export default function Dashboard() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123 456 7890',
        billingAddress: '123 Billing St, City, Country',
        shippingAddress: '789 Shipping Ave, City, Country'
    });

    return (
        <div>
            <header className='account-header'>
                <h1>Welcome, {user.name}!</h1>
            </header>

            <div className='dashboard-flex-container'>
                    {/* Account Information Section */}
                <section className='dashboard-section'>
                    <h2>Account Information</h2>
                    <p><strong>Name: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>Phone: </strong>{user.phone}</p>
                    <button className='edit-button'>Edit</button>
                </section>

                    {/* Address Information Section */}
                <section className='address-info-section'>
                    <h2>Address Information</h2>
                    <div className='address-flex-container'>
                            {/* Billing Address */}
                        <div className='address-item'>
                            <h3>Default Billing Address</h3>
                            <p>{user.billingAddress}</p>
                            <button className='add-address-button'>Add Billing Address</button>
                        </div>
                            {/* Shipping Address */}
                        <div className='address-item'>
                            <h3>Default Shipping Address</h3>
                            <p>{user.shippingAddress}</p>
                            <button className='add-address-button'>Add Shipping Address</button>
                        </div>
                    </div>
                        {/* Manage Address Button */}
                    <button className='manage-address-button'>Manage Address</button>
                </section>
            </div>
        </div>
    )
}


                

                


