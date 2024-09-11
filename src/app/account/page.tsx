"use client"
import React, { useState } from 'react';
import { MdOutlineDashboard, MdOutlineSupervisorAccount } from 'react-icons/md';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import Dashboard from './accountComp/dashboard';
import AccountInformation from './accountComp/accInfo';
import AddressBook from './accountComp/addressBook';
import ConfirmationPopup from '../components/confirmationPopup'; // Import the new popup component
import '../css/Account.css';

export default function Account() {
    const [selectedSection, setSelectedSection] = useState('dashboard');
    const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

    const handleSectionClick = (section: string) => {
        setSelectedSection(section);
    };

    const handleLogoutClick = () => {
        setLogoutPopupVisible(true); // Show the confirmation popup
    };

    const handleConfirmLogout = () => {
        setLogoutPopupVisible(false); // Hide the popup
        // Add your logout logic here
        console.log('User logged out');
    };

    const handleCancelLogout = () => {
        setLogoutPopupVisible(false); // Hide the popup
    };

    return (
        <div className='account-page'>
            <aside className='account-sidebar'>
                <ul>
                    <li 
                        className={`sidebar-item ${selectedSection === 'dashboard' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('dashboard')}
                    >
                        <MdOutlineDashboard size={25} /> Dashboard
                    </li>
                    <li
                        className={`sidebar-item ${selectedSection === 'account-info' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('account-info')}
                    >
                        <MdOutlineSupervisorAccount size={25} /> Account Information
                    </li>
                    <li 
                        className={`sidebar-item ${selectedSection === 'address-book' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('address-book')}
                    >
                        <FaRegAddressCard size={25} /> Address Book
                    </li>
                    <li className='sidebar-item' onClick={handleLogoutClick}>
                        <AiOutlineLogout size={25} />Logout
                    </li>
                </ul>
            </aside>

            <main className='account-main'>
                {selectedSection === 'dashboard' && <Dashboard />}
                {selectedSection === 'account-info' && <AccountInformation />}
                {selectedSection === 'address-book' && <AddressBook />}
            </main>

            {/* Render the confirmation popup if visible */}
            {isLogoutPopupVisible && (
                <ConfirmationPopup
                    message="Are you sure you want to log out?"
                    onConfirm={handleConfirmLogout}
                    onCancel={handleCancelLogout}
                />
            )}
        </div>
    );
}
