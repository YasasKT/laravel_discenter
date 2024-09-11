import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import ProdImage from '../../img/samsung-fridge.png'; // Import your product image
import '../../css/Cart.css'; // Import your CSS file

const QuantityChanger: React.FC<{ 
    quantity: number; 
    increase: () => void; 
    decrease: () => void;
}> = ({ quantity, increase, decrease }) => {
    return (
        <div className="quantity-changer">
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
        </div>
    );
};

const CartDetails: React.FC = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 5000,
            quantity: 1,
            image: ProdImage,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 7000,
            quantity: 1,
            image: ProdImage,
        },
    ]);

    const increaseQuantity = (id: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const deleteItem = (id: number) => {
        const filteredItems = cartItems.filter(item => item.id !== id);
        setCartItems(filteredItems);
    };

    return (
        <div className='cart-section-left'>
            <div className='cart-header'>
                <div className='cart-header-item'>Product</div>
                <div className='cart-header-item'>Price</div>
                <div className='cart-header-item'>Quantity</div>
                <div className='cart-header-item'>Subtotal</div>
            </div>
            {cartItems.map(item => (
                <div className='cart-item' key={item.id}>
                    <Image src={item.image} alt={item.name} width={100} height={100} />
                    <div className='cart-item-details'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className='cart-item-price'>
                        <p>${item.price}</p>
                    </div>
                    <div className='cart-item-quantity'>
                        <QuantityChanger
                            quantity={item.quantity}
                            increase={() => increaseQuantity(item.id)}
                            decrease={() => decreaseQuantity(item.id)}
                        />
                    </div>
                    <div className='cart-item-subtotal'>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <FaTrashAlt className='cart-item-delete' onClick={() => deleteItem(item.id)} />
                </div>
            ))}
        </div>
    );
};

export default CartDetails;
