"use client"
import { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import WishItem from './wishlistComp/wishItem';
import '../../css/Wishlist.css';
import { getWishlist, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist } from '../network/wishlist_api';
import { WishlistItem } from '../models/wishlist';

export default function Wishlist() {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    useEffect(() => {
        // Fetch wishlist items when the component mounts
        setWishlist(getWishlist());
    }, []);

    const handleDelete = (id: number) => {
        const result = removeFromWishlist(id);
        if (result === "Item remove from wishlist.") {
            setWishlist(getWishlist());
        } else {
            console.error(result);
        }
    };

    const handleAddToCart = (id: number) => {
        console.log(`Add products with ID ${id} to cart`);
    };

    const handleClearWishlist = () => {
        const result = clearWishlist();
        if (result === "Wishlist cleared successfully.") {
            setWishlist([]);
        } else {
            console.error(result);
        }
    };

    return (
        <div>
            <Hero 
                pageTitle='Wishlist'
                pageName='Wishlist'
            />

            <div className='wishlist-page'>
                <div className='wishlist-container'>
                    <div className='wishlist-header'>
                        <span className='header-item'>Product Name</span>
                        <span className='header-item'>Unit Price</span>
                        <span className='header-item-stock'>Stock Status</span>
                    </div>
                    {wishlist.length > 0 ? (
                        wishlist.map(product => (
                            <WishItem
                                key={product.id as React.Key}
                                product={product}
                                onDelete={handleDelete}
                                onAddToCart={handleAddToCart}
                            />
                        ))
                    ) : (
                        <p className='empty-meessage'>Your wishlist is empty.</p>
                    )}
                    {wishlist.length > 0 && (
                        <button className='clear-wishlist-btn' onClick={handleClearWishlist}>
                            Clear Wishlist
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
