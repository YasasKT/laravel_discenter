"use client";

import React, { useState, useEffect } from 'react';
import CartHero from './cartComp/cartHero';
import CartDetails from './cartComp/productDet';
import CartTotals from './cartComp/cartTotal';
import '../../css/Cart.css';
import { getCart, updateCartItemQuantity, removeFromCart } from '@/app/network/cart_api';
import { CartItems } from '@/app/models/cart';

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    useEffect(() => {
        // Fetch initial cart data
        setCartItems(getCart());
    }, []);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems(updateCartItemQuantity(id, newQuantity));
    };

    const handleDelete = (id: number) => {
        setCartItems(removeFromCart(id));
    };

    // Calculate subtotal dynamically
    const calculateSubtotal = (): number => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <div>
            <CartHero />
            <div className="cart-container">
                {/* Pass cart state and handlers as props */}
                <CartDetails 
                    cartItems={cartItems} 
                    onQuantityChange={handleQuantityChange} 
                    onDelete={handleDelete} 
                />
                <CartTotals subtotal={calculateSubtotal()} />
            </div>
        </div>
    );
}
