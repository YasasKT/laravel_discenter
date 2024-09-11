"use client"
import { useState } from 'react';
import Hero from '../components/Hero';
import WishItem from './wishlistComp/wishItem';
import '../css/Wishlist.css';

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([
        { id: 1, name: 'Product 1', image: require('../img/headphones.png'), price: 4000, stockStatus: 'IN STOCK'},
        { id: 1, name: 'Product 1', image: require('../img/headphones.png'), price: 4000, stockStatus: 'IN STOCK'},
        { id: 1, name: 'Product 1', image: require('../img/headphones.png'), price: 4000, stockStatus: 'IN STOCK'},
    ]);

    const handleDelete = (id: number) => {
        setWishlist(wishlist.filter(product => product.id !== id));
    };

    const handleAddToCart = (id: number) => {
        console.log(`Add products with ID ${id} to cart`);
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
                    {wishlist.map(product => (
                        <WishItem 
                            key={product.id}
                            product={product}
                            onDelete={handleDelete}
                            onAddToCart={handleAddToCart}
                        />    
                    ))}
                </div>
            </div>
        </div>
    );
};
