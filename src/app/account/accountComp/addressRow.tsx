import React from 'react';
import '../../css/Account.css';

interface AddressRowProps {
    address: {
        firstName: string;
        lastName: string;
        address: string;
        country?: string;
        province: string;
        city: string;
        postalCode?: string;
        phoneNumber: string;
        isDefault: boolean;
    };
}

export default function AddressRow({ address }: AddressRowProps) {
    return (
        <div className='address-row'>
            <p><strong>{address.firstName} {address.lastName}</strong></p>
            <p>{address.address}, {address.city}, {address.province}</p>
            {address.country && <p>{address.country}</p>}
            {address.postalCode && <p>Postal Code: {address.postalCode}</p>}
            <p>Phone: {address.phoneNumber}</p>
            {address.isDefault && <p><strong>Default Address</strong></p>}
        </div>
    );
}
