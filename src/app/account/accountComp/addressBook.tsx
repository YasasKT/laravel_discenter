import React, { useEffect, useState } from 'react';
import '../../../css/Account.css';
import AddressRow, { AddressRowProps } from '../accountComp/addressRow';
import BillingAddressForm from '../../billing/billingComp/billingAddressFrom';
import { User, Address } from '@/app/models/user';
import { fetchUser, addAddress, deleteAddress } from '@/app/network/account_api';

export default function AddressBook() {
    const [user, setUser] = useState<User | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [formType, setFormType] = useState<'billing' | 'shipping'>('billing');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await fetchUser();
                setUser(userData);
            } catch (error) {
                console.error("Failed to load user data:", error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const handleSaveAddress = async (newAddress: Partial<Address>) => {
        if (!user) return;

        try {
            const updatedAddresses = await addAddress({
                ...newAddress,
                title: formType === 'billing' ? 'Billing' : 'Shipping',
            } as Address);

            setUser({ ...user, addressBook: updatedAddresses });
            setModalOpen(false);
        } catch (error) {
            console.error("Failed to save the address:", error);
        }
    };

    const handleDeleteAddress = async (addressId: number) => {
        if (!user) return;

        try {
            const updatedAddresses = await deleteAddress(addressId);
            setUser({ ...user, addressBook: updatedAddresses });
        } catch (error) {
            console.error("Failed to delete address: ", error);
        }
    };

    const transformAddress = (address: Address): AddressRowProps['address'] => ({
        id: address.id,
        firstName: address.firstName || 'N/A',
        lastName: address.lastName || 'N/A',
        address: address.address || 'N/A',
        country: address.country,
        state: address.state || 'N/A',
        city: address.city || 'N/A',
        postalCode: address.postalCode,
        phoneNumber: address.phoneNumber || 'N/A',
        isDefault: address.isDefault || false,
    })

    if (loading) return <p>Loading address book...</p>
    if (!user) return <p>Failed to load user data.</p>

    const billingAddresses = user.addressBook.filter((address) => address.title === 'Billing');
    const shippingAddresses = user.addressBook.filter((address) => address.title === 'Shipping');

    return (
        <div className='address-book'>
            <h1>Address Book</h1>

            {/* Default Addresses Section */}
            <section className='default-addresses'>
                <div className='default-address billing'>
                    <h2>Default Billing Address</h2>
                    {billingAddresses.length > 0 ? (
                        <AddressRow address={billingAddresses[0]} onDelete={handleDeleteAddress} />
                    ) : (
                        <p>No billing address set.</p>
                    )}
                </div>
                <div className='default-address shipping'>
                    <h2>Default Shipping Address</h2>
                    {shippingAddresses.length > 0 ? (
                        <AddressRow address={shippingAddresses[0]} onDelete={handleDeleteAddress} />
                    ) : (
                        <p>No shipping address set.</p>
                    )}
                </div>
            </section>

            {/* Billing Addresses Section */}
            <section className='address-section'>
                <h2>Billing Addresses</h2>
                {billingAddresses.map((address) => (
                    <AddressRow
                        key={address.id}
                        address={address}
                        onDelete={handleDeleteAddress}
                    />
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
                {shippingAddresses.map((address) => (
                    <AddressRow
                        key={address.id}
                        address={address}
                        onDelete={handleDeleteAddress}
                    />
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
                    formType={formType}
                    isShippingForm={formType === 'shipping'}
                />
            )}
        </div>
    );
}
