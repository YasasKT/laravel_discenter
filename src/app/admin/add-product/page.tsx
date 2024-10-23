"use client";
import React, { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import "@/css/ProductAdd.css";
import { FaTrash } from "react-icons/fa";

export default function AddProduct() {
    const [name, setName] = React.useState("");
    const [shortDes, setShortDes] = React.useState("");
    const [des, setDes] = React.useState("");
    const [model, setModel] = React.useState("");
    const [oldPrice, setOldPrice] = React.useState("");
    const [price, setPrice] = React.useState(""); 
    const [featureName, setFeatureName] = React.useState("");
    const [featureValue, setFeatureValue] = React.useState("");
    const [features, setFeatures] = useState([{ name: "", value: "" }]);

    const addFeature = () => {
        setFeatures([...features, { name: "", value: ""}]);
    };

    const removeFeature = (index: number) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
    };

    const handleFeatureChange = (index: number, field: keyof typeof features[number], value: string) => {
        const updatedFeatures = [...features];
        updatedFeatures[index][field] = value;
        setFeatures(updatedFeatures);
    };

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };
    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubCategory(e.target.value);
    };
    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(e.target.value);
    };
    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value);
    };
    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(e.target.value);
    };

    return (
        <section>
            <div className="next-text">
                <h2 className="page-label">Manage Products</h2>
            </div>
            <div className="productAdd-sec">
                <div className="title-productAdd">
                    <IoMdAlert color="#e96709"/>
                    <h3>Product Information</h3>
                </div>
                <div className="product-form">
                        <label>Product Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            required
                        />
                        <div className="product-other">
                            <div>
                                <label>Model</label>
                                <input 
                                    type="text"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    placeholder="Enter model name"
                                    required
                                />
                            </div>
                            <div>
                                <label>Old Price</label>
                                <input 
                                    type="text"
                                    value={oldPrice}
                                    onChange={(e) => setOldPrice(e.target.value)}
                                    placeholder="Enter old price"
                                />
                            </div>
                            <div>
                                <label>Price</label>
                                <input 
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Enter new price"
                                    required
                                />
                            </div>
                        </div>
                        <label>Short Description</label>
                        <textarea 
                            value={shortDes}
                            onChange={(e) => setShortDes(e.target.value)}
                            placeholder="Enter short description"
                            rows={3}
                        />
                        <label>Description</label>
                        <textarea 
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            placeholder="Enter description"
                            rows={5}
                        />
                </div>
            </div>

            <div className="productAdd-sec">
                <div className="title-productAdd">
                    <IoMdAlert color="#e96709"/>
                    <h3>General Information</h3>
                </div>
                <div className="filter-dropdowns">
                    <div className="filter-row">
                        <div className="filterdrop-container">
                            <label htmlFor="category">Category</label>
                            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="">All Categories</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Home Appliances">Home Appliances</option>
                            </select>
                        </div>

                        <div className="filterdrop-container">
                            <label htmlFor="subCategory">Sub-Category</label>
                            <select id="subCategory" value={selectedSubCategory} onChange={handleSubCategoryChange}>
                                <option value="">All Sub-Categories</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Wearables">Wearables</option>
                                <option value="Furniture">Furniture</option>
                            </select>
                        </div>

                        <div className="filterdrop-container">
                            <label htmlFor="brand">Brand</label>
                            <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
                                <option value="">All Brands</option>
                                <option value="Brand A">Brand A</option>
                                <option value="Brand B">Brand B</option>
                                <option value="Brand C">Brand C</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productAdd-sec">
                <div className="title-productAdd">
                    <IoMdAlert color="#e96709"/>
                    <h3>Feature Information</h3>
                </div>
                {features.map((feature, index) => (
                    <div key={index} className="feature-title">
                        <div className="feature-head">
                            <MdFeaturedPlayList />
                            <h3>Feature {index + 1}</h3>
                        </div>
                        <div className="product-form">
                            <div className="product-other">
                                <div>
                                    <label>Feature Name</label>
                                    <input 
                                        type="text"
                                        value={feature.name}
                                        onChange={(e) => handleFeatureChange(index, "name", e.target.value)}
                                        placeholder="Enter feature name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Feature Value</label>
                                    <input 
                                        type="text"
                                        value={feature.value}
                                        onChange={(e) => handleFeatureChange(index, "value", e.target.value)}
                                        placeholder="Enter feature value"
                                    />
                                </div>
                            </div>
                            {index > 0 && (
                                <button className="remove-feature-btn" onClick={() => removeFeature(index)}>
                                    Remove <FaTrash className="remove-icon" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <div className="featurebtn-container">
                    <button onClick={addFeature}>Add More <FaPlus className="plus-icon"/></button>
                </div>
            </div>

            <div className="productAdd-sec">
                <div className="title-productAdd">
                    <IoMdAlert color="#e96709"/>
                    <h3>Product Images</h3>
                </div>
            </div>
        </section>
    )
}