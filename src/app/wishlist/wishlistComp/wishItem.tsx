import React from "react";
import Image from 'next/image';
import '../../css/WishItem.css';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';

type WishItemProps = {
    product: {
        id: number;
        name: string;
        image: string;
        price: number;
        stockStatus: string;
    };
    onDelete: (id: number) => void;
    onAddToCart: (id: number) => void;
};

const WishItem: React.FC<WishItemProps> = ({ product, onDelete, onAddToCart }) => {
    return (
        <div className="wishlist-item">
            {/* Product Image */}
            <div>
                <Image src={product.image} alt={product.name} className="wishlist-product-image" width={100} height={100} />
            </div>

            {/* Product Details in Row Format */}
            <div className="wishlist-product-details">
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                </div>
                <div className="product-info">
                    <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                <div className="product-info">
                    <p className={`product-stock ${product.stockStatus === 'IN STOCK' ? 'in-stock' : 'out-of-stock'}`}>
                        {product.stockStatus}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="wishlist-actions">
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product.id)}>
                    <FaShoppingCart /> Add to Cart
                </button>
                <button className="delete-btn" onClick={() => onDelete(product.id)}>
                    <FaTrashAlt /> Delete
                </button>
            </div>
        </div>
    );
};

export default WishItem;
