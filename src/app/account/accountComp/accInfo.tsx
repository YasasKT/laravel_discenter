import React, { useState } from 'react';
import '../../../css/Account.css';
import { User } from '@/app/models/user';
import { updateAccountInfo } from '@/app/network/account_api';

interface AccountInformationProps {
    initialUserData: User;
}

const AccountInformation: React.FC<AccountInformationProps> = ({ initialUserData}) => {
    const [user, setUser] = useState<User>(initialUserData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            await updateAccountInfo(user);
            setMessage("Account information uploaded successfully.");
        } catch (error) {
            console.error("Error updating account information:", error);
            setMessage("Failed to update account information. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='dashboard-section'>
            <h1>Account Information</h1>
            {message && <p className={`message ${isSubmitting ? 'loading' : 'success'}`}>{message}</p>}
            <form className='account-info-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input 
                            type='text' 
                            id='firstName' 
                            name='firstName' 
                            value={user.firstName} 
                            onChange={handleInputChange} 
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
                <button type='submit' className='save-button' disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </section>
    );
};

export default AccountInformation;
