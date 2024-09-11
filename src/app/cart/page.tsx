"use client"
import CartHero from "./cartComp/cartHero";
import CartDetails from "./cartComp/productDet";
import CartTotals from "./cartComp/cartTotal";
import '../css/Cart.css';

export default function Cart() {
    const subtotal = 12000;

    return (
        <div>
            <CartHero />
            <div className="cart-container">
                <CartDetails />
                <CartTotals subtotal={subtotal} />
        </div>
        </div>
    );
};
