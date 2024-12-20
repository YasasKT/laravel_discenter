"use client";
import React, { useState, useEffect } from "react";
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
    initialData?: {
        name: string;
        status: boolean;
        color?: string;
        image?: string;
        category?: string;
    };
}

const PopupNew: React.FC<PopupNewProps> = ({
    onClose,
    onCreate,
    title,
    nameLabel,
    placeholder,
    showColorPicker = true,
    showImageUpload = false,
    categories = [],
    initialData
}) => {
    const [name, setName] = useState(initialData?.name || "");
    const [status, setStatus] = useState<boolean>(initialData?.status ?? true);
    const [color, setColor] = useState(initialData?.color || "#ff0000");
    const [image, setImage] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(
        initialData?.category || ""
    );

    useEffect(() => {
        if (initialData?.image) {
            const imageFile = new File([], initialData.image); // Placeholder for initial image
            setImage(imageFile);
        }
    }, [initialData]);

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

                    {showImageUpload && (
                        <>
                            <label>Upload Image</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </>
                    )}

                    {showColorPicker && (
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
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="submit-btn" onClick={handleSubmit}>
                        {initialData ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupNew;
