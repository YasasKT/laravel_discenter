import React from 'react';
import '../../../css/Account.css';

export interface AddressRowProps {
    address: {
        id:number;
        firstName: string;
        lastName: string;
        address: string;
        country?: string;
        state: string;
        city: string;
        postalCode?: string;
        phoneNumber: string;
        isDefault: boolean;
    };
    onDelete?: (addressId: number) => void;
}

export default function AddressRow({ address, onDelete }: AddressRowProps) {
    return (
        <div className='address-row'>
            <p><strong>{address.firstName} {address.lastName}</strong></p>
            <p>{address.address}, {address.city}, {address.state}</p>
            {address.country && <p>{address.country}</p>}
            {address.postalCode && <p>Postal Code: {address.postalCode}</p>}
            <p>Phone: {address.phoneNumber}</p>
            {address.isDefault && <p><strong>Default Address</strong></p>}
            {onDelete && (
                <button
                    className='delete-button'
                    onClick={() => onDelete(address.id)}
                >
                    Delete
                </button>
            )}
        </div>
    );
}
