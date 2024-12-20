import { title } from "process";
import { User, Address } from "../models/user";
import { rejects } from "assert";

let user: User = {
    id: 1,
    name: "john Doe",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    secondaryPhone: "098-765-4321",
    dateOfBirth: "12/10/2001",
    addressBook: [
        {
            id: 1,
            title: "Home",
            address: "123 Main St",
            city: "Los Angeles",
            state: "CA",
            postalCode: "9001",
            country: "USA",
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "123-456-7890",
            isDefault: true
        },
        {
            id: 2,
            title: "Work",
            address: "$56 Elm St",
            city: "New York",
            state: "NY",
            postalCode: "1001",
            country: "USA",
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "098-765-4321",
            isDefault: false,

        },
    ],
};

// Fetch user details
export const fetchUser = async (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);
        }, 500);
    });
};

// Update account information
export const updateAccountInfo = async (updatedInfo: Partial<User>): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!updatedInfo.name || !updatedInfo.email) {
                reject("Name and email are required");
            } else {
                user = { ...user, ...updatedInfo };
                resolve(user);
            }
        }, 500);
    });
};

// Add a new address
export const addAddress = async (newAddress: Address): Promise<Address[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            newAddress.id = user.addressBook.length + 1;
            user.addressBook.push(newAddress);
            resolve(user.addressBook);
        }, 500);
    });
};

// Remove an address
export const deleteAddress = async (addressId: number): Promise<Address[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addressIndex = user.addressBook.findIndex((addr) => addr.id === addressId);
            if (addressIndex === -1) {
                reject("Address not found");
            } else {
                user.addressBook.splice(addressIndex, 1);
                resolve(user.addressBook);
            }
        }, 500);
    });
};