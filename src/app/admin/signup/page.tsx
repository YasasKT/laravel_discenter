"use client";
import React, { useState } from 'react';
import WelcomImg from "@/img/undraw_welcome_cats_thqn.png";
import "@/css/Signup.css";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowComfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowComfirmPassword(!showConfirmPassword);

    return (
        <div className='signup-container'>
            <div className='signup-image'>
                <img src="/img/undraw_welcome_cats_thqn.png" alt='Signup Image' />
            </div>

            <div className='signup-form'>
                <div className='form-header'>
                    <img src="/img/dclogocrop.jpg" alt='logo' className='logo-container'/>
                    <p>Welcome to Discount Center! One place for all your needs.</p>
                    <h2>
                        Create your admin account here
                    </h2>
                </div>

                <div className='form-sign'>
                <form>
                    <div className='formAd-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email address'
                            required
                        />
                    </div>

                    <div className='formAd-group'>
                        <label htmlFor='password'>Password</label>
                        <div className='password-wrapper'>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                placeholder='Enter your password'
                                required
                            />
                            <span onClick={togglePasswordVisibility} className='show-password'>
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                    </div>

                    <div className='formAd-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='password-wrapper'>
                            <input 
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirm-password'
                                name='confirm-password'
                                placeholder='Re-enter your password'
                                required
                            />
                            <span onClick={toggleConfirmPasswordVisibility} className='show-password'>
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                    </div>

                    <div className='signupbtn-container'>
                        <button type='submit' className='signup-button'>Signup</button>
                    </div>

                    <div className='form-footer'>
                        <a href='/admin/login'>Login to your account</a>
                        <a href='/admin/reset-password'>Reset Password</a>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};