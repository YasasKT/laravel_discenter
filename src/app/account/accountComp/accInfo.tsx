import React, { useState } from 'react';
import '../../css/Account.css';

export default function AccountInformation() {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '123 456 7890',
        secondaryPhone: '098 765 4321',
        dateOfBirth: '1990-01-01'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section className='dashboard-section'>
            <h1>Account Information</h1>
            <form className='account-info-form'>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input 
                            type='text' 
                            id='firstName' 
                            name='firstName' 
                            value={user.firstName} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                            type='text' 
                            id='lastName' 
                            name='lastName' 
                            value={user.lastName} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            value={user.email} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input 
                            type='tel' 
                            id='phone' 
                            name='phone' 
                            value={user.phone} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='secondaryPhone'>Secondary Phone Number</label>
                        <input 
                            type='tel' 
                            id='secondaryPhone' 
                            name='secondaryPhone' 
                            value={user.secondaryPhone} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='dateOfBirth'>Date of Birth</label>
                        <input 
                            type='date' 
                            id='dateOfBirth' 
                            name='dateOfBirth' 
                            value={user.dateOfBirth} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>
                <button type='submit' className='save-button'>
                    Save Changes
                </button>
            </form>
        </section>
    );
}
