"use client"
import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import '../css/Checkout.css'; // Ensure the correct CSS file is imported

const CheckoutPage: React.FC = () => {
    const [selectedCardType, setSelectedCardType] = useState<string | null>(null);
    const [paymentDetails, setPaymentDetails] = useState({
        fullName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    // Handle card type selection
    const handleCardTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCardType(e.target.value);
    };

    // Handle input change in payment form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    // Handle form submission
    const handleSubmitPayment = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit the payment details
        console.log('Payment Details:', paymentDetails);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>

            {/* Step 1: Select Card Type */}
            <h3>Select Card Type</h3>
            <div className="card-selection">
                <label>
                    <input
                        type="radio"
                        name="cardType"
                        value="Visa"
                        onChange={handleCardTypeChange}
                        checked={selectedCardType === 'Visa'}
                    />
                    <div className='card-logo'>
                        <FaCcVisa style={{ color: '#1a1f71' }}/>
                    </div>
                    Visa
                </label>
                <label>
                    <input
                        type="radio"
                        name="cardType"
                        value="MasterCard"
                        onChange={handleCardTypeChange}
                        checked={selectedCardType === 'Mastercard'}
                    />
                    <div className='card-logo'>
                        <FaCcMastercard style={{ color: '#eb001b'}}/>
                    </div>
                    MasterCard
                </label>
                <label>
                    <input
                        type="radio"
                        name="cardType"
                        value="AmericanExpress"
                        onChange={handleCardTypeChange}
                    />
                    <div className='card-logo'>
                        <FaCcAmex style={{ color: '#2e77bb' }}/>
                    </div>
                    American Express
                </label>
            </div>

            {/* Step 2: Payment Form (Shown if card type is selected) */}
            {selectedCardType && (
                <div className="payment-form">
                    <h3>{selectedCardType} Payment Details</h3>

                    <form onSubmit={handleSubmitPayment}>
                    <div className="input-row">
                            <label>Card Holder's Name</label>
                            <input
                                type="text"
                                name="cardHolder"
                                placeholder="Enter your name"
                                value={paymentDetails.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="input-row">
                            <label>Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Enter your card number"
                                value={paymentDetails.cardNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="input-row">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                placeholder="MM/YY"
                                value={paymentDetails.expiryDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="input-row">
                            <label>CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                placeholder="Enter CVV"
                                value={paymentDetails.cvv}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-payment-btn">
                            Submit Payment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
