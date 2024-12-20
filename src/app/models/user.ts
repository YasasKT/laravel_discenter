export interface User {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    secondaryPhone: string;
    dateOfBirth: string;
    addressBook: Address[];
}

export interface Address {
    id: number;
    title: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isDefault: boolean;
}