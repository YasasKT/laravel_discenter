import { WishlistItem } from "../models/wishlist";

let wishlist: WishlistItem[] = [
    {
        id: 1,
        session_id: "1001",
        pid: 1,
        name: "Product 1",
        image: "/img/headphones.png", 
        price: 4000, 
        stockStatus: "In stock"
    },
    {
        id: 2,
        session_id: "1002",
        pid: 2,
        name: "Product 2",
        image: "/img/headphones.png", 
        price: 4000, 
        stockStatus: "Out of stock"
    },
    {
        id: 3,
        session_id: "1003",
        pid: 3,
        name: "Product 3",
        image: "/img/headphones.png", 
        price: 4000, 
        stockStatus: "In stock"
    },
    {
        id: 4,
        session_id: "1004",
        pid: 4,
        name: "Product 4",
        image: "/img/headphones.png", 
        price: 4000, 
        stockStatus: "In stock"
    },
    {
        id: 5,
        session_id: "1005",
        pid: 5,
        name: "Product 5",
        image: "/img/headphones.png", 
        price: 4000, 
        stockStatus: "Out of stock"
    }
];

// Get all wishlist items
export const getWishlist = (): WishlistItem[] => {
    return wishlist;
};

// Add an item to the wishlist
export const addToWishlist = (item: WishlistItem): string => {
    if (wishlist.find(w => w.id === item.id)) {
        return "Item already exists in the wishlist.";
    }
    wishlist.push(item);
    return 'Item added to wishlist successfully.';
};

// Remove an item from the wishlist
export const removeFromWishlist = (id: number): string => {
    const index = wishlist.findIndex(item => item.id === id);
    if (index !== -1) {
        wishlist.splice(index, 1);
        return "Item remove from wishlist.";
    }
    return "Item not found in wishlist";
};

// Clear the entire wishlist
export const clearWishlist = (): string => {
    wishlist = [];
    return "Wishlist cleared successfully.";
};

// Check if an item exists in the wishlist
export const isInWishlist = (id: number): boolean => {
    return wishlist.some(item => item.id === id);
};