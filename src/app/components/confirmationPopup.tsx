import React from 'react';
import '../css/ConfirmationPopup.css'; // Create a separate CSS file for the popup

interface ConfirmationPopupProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className='confirmation-popup'>
            <div className='popup-content'>
                <p>{message}</p>
                <div className='popup-actions'>
                    <button className='confirm-button' onClick={onConfirm}>Confirm</button>
                    <button className='cancel-button' onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
