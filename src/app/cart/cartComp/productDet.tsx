import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import '../../../css/Cart.css'; 
import { CartItems } from '@/app/models/cart';

interface CartDetailsProps {
    cartItems: CartItems[];
    onQuantityChange: (id: number, newQuantity: number) => void;
    onDelete: (id: number) => void;
}

const CartDetails: React.FC<CartDetailsProps> = ({ cartItems, onQuantityChange, onDelete }) => {
    return (
        <div className="cart-section-left">
            <div className="cart-header">
                <div className="cart-header-item">Product</div>
                <div className="cart-header-item">Price</div>
                <div className="cart-header-item">Quantity</div>
                <div className="cart-header-item">Subtotal</div>
            </div>
            {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <Image src={item.image} alt={item.name} width={100} height={100} />
                    <div className="cart-item-details">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="cart-item-price">
                        <p>${item.price}</p>
                    </div>
                    <div className="cart-item-quantity">
                        <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="cart-item-subtotal">
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <FaTrashAlt className="cart-item-delete" onClick={() => onDelete(item.id)} />
                </div>
            ))}
        </div>
    );
};

export default CartDetails;
