"use client";
import React, { useState } from "react";
import "@/css/PopupAddNew.css";

interface PopupNewProps {
    onClose: () => void;
    onCreate: (name: string, color: string, status: boolean, image?: string, category?: string) => void;
    title: string;
    nameLabel: string;
    placeholder: string;
    showColorPicker?: boolean;
    showImageUpload?: boolean;
    categories?: string[];
}

const PopupNew: React.FC<PopupNewProps> = ({
    onClose,
    onCreate,
    title,
    nameLabel,
    placeholder,
    showColorPicker = true,
    showImageUpload = false,
    categories = []
}) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState(true);
    const [color, setColor] = useState("#ff0000");
    const [image, setImage] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (name.trim()) {
            const imageUrl = image ? URL.createObjectURL(image) : undefined;
            onCreate(name, color, status, imageUrl, selectedCategory);
            onClose();
        } else {
            alert(`Please provide a ${nameLabel.toLowerCase()}.`);
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popupAdd-content">
                <h2>{title}</h2>
                <div className="popup-form">
                    <label>{nameLabel}</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={placeholder}
                        required
                    />
    
                    {categories.length > 0 && (
                        <> 
                            <label>Category</label>
                            <select 
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}

                    {showImageUpload && ( // Conditionally render the image upload field
                        <>
                            <label>Upload Image</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </>
                    )}

                    {showColorPicker && ( // Conditionally render the color picker
                        <>
                            <label>Color</label>
                            <label className="color-picker">
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </label>
                        </>
                    )}

                    <label>Status</label>
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={status}
                            onChange={() => setStatus(!status)}
                        />
                        <span className="slider round"></span>
                    </label>

                </div>
                <div className="popupAdd-actions">
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="submit-btn" onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default PopupNew;
