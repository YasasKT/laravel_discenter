import React, { useState } from 'react';
import '../../css/Account.css';
import AddressRow from '../accountComp/addressRow';
import BillingAddressForm from '../../billing/billingComp/billingAddressFrom';  // Import the form component

export default function AddressBook() {
    const [billingAddresses, setBillingAddresses] = useState([
        {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Main St',
            country: 'Country',
            province: 'Province',
            city: 'City',
            phoneNumber: '123 456 7890',
            isDefault: true
        },
    ]);

    const [shippingAddresses, setShippingAddresses] = useState([
        {
            firstName: 'Jane',
            lastName: 'Doe',
            address: '456 Elm St',
            province: 'Province',
            city: 'City',
            postalCode: '12345',
            phoneNumber: '098 765 4321',
            isDefault: false
        },
    ]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [formType, setFormType] = useState<'billing' | 'shipping'>('billing'); // Manage form type

    const handleSaveAddress = (newAddress: any) => {
        if (formType === 'billing') {
            setBillingAddresses([...billingAddresses, newAddress]);
        } else {
            setShippingAddresses([...shippingAddresses, newAddress]);
        }
        setModalOpen(false);  // Close modal after saving
    };

    return (
        <div className='address-book'>
            <h1>Address Book</h1>

            {/* Default Addresses Section */}
            <section className='default-addresses'>
                <div className='default-address billing'>
                    <h2>Default Billing Address</h2>
                    <AddressRow address={billingAddresses[0]} />
                </div>
                <div className='default-address shipping'>
                    <h2>Default Shipping Address</h2>
                    <AddressRow address={shippingAddresses[0]} />
                </div>
            </section>

            {/* Billing Addresses Section */}
            <section className='address-section'>
                <h2>Billing Addresses</h2>
                {billingAddresses.map((address, index) => (
                    <AddressRow key={index} address={address} />
                ))}
                <button className='add-address-button' onClick={() => {
                    setModalOpen(true);
                    setFormType('billing');  // Set form type to billing
                }}>
                    Add New Billing Address
                </button>
            </section>

            {/* Shipping Addresses Section */}
            <section className='address-section'>
                <h2>Shipping Addresses</h2>
                {shippingAddresses.map((address, index) => (
                    <AddressRow key={index} address={address} />
                ))}
                <button className='add-address-button' onClick={() => {
                    setModalOpen(true);
                    setFormType('shipping');  // Set form type to shipping
                }}>
                    Add Shipping Address
                </button>
            </section>

            {/* Modal for New Address */}
            {isModalOpen && (
                <BillingAddressForm
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveAddress}
                    formType={formType}  // Pass form type as a prop
                />
            )}
        </div>
    );
}
