import { CartItems } from "../models/cart";

let cart: CartItems[] = [
    {
        id: 1,
        session_id: "1001",
        pid: 101,
        name: "Samsung Fridge",
        price: 4000,
        quantity: 1,
        image: "/images/product 1.png",
    },
    {
        id: 2,
        session_id: "1002",
        pid: 102,
        name: "Samsung Fridge",
        price: 4000,
        quantity: 1,
        image: "/images/product 2.png",
    },
    {
        id: 3,
        session_id: "1003",
        pid: 103,
        name: "Samsung Fridge",
        price: 4000,
        quantity: 1,
        image: "/images/product 3.png",
    },
    {
        id: 4,
        session_id: "1004",
        pid: 104,
        name: "Samsung Fridge",
        price: 4000,
        quantity: 1,
        image: "/images/product 4.png",
    },
    {
        id: 5,
        session_id: "1005",
        pid: 105,
        name: "Samsung Fridge",
        price: 4000,
        quantity: 1,
        image: "/images/product 5.png",
    },
];

// Fetch all cart items
export const getCart = (): CartItems[] => {
    return cart;
}

// Add an item to the cart
export const addToCart = (newItem: CartItems): CartItems[] => {
    const existingItemIndex = cart.findIndex(item => item.id === newItem.id);

    if (existingItemIndex > -1) {
        // If item exists, update quantity
        cart[existingItemIndex].quantity += newItem.quantity;
    } else {
        // Add new item to the cart
        cart.push(newItem);
    }
    
    return cart;
};

// Update the quantity of an item in the cart
export const updateCartItemQuantity = (id: number, quality: number): CartItems[] => {
    cart = cart.map(item => 
        item.id === id ? { ...item, quality } : item
    );

    return cart;
};

// Remove an item from the cart
export const removeFromCart = (id: number): CartItems[] => {
    cart = cart.filter(item => item.id !== id);

    return cart;
};

// Clear the entire cart
export const clearCart = (): CartItems[] => {
    cart = [];
    return cart;
}

// Calculate the subtotal of the cart
export const getCartSubtotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
