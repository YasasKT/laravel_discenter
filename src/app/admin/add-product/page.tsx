"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoMdAlert } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import "@/css/ProductAdd.css";
import { FaImage, FaTrash } from "react-icons/fa6";
import { addProduct, getProduct, updateProduct } from "@/app/network/products_api";

export default function AddProduct() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("id") ? parseInt(searchParams.get("id")!, 10) : undefined;

    const isEditMode = !!productId;

    const [name, setName] = React.useState("");
    const [shortDes, setShortDes] = React.useState("");
    const [des, setDes] = React.useState("");
    const [model, setModel] = React.useState("");
    const [oldPrice, setOldPrice] = React.useState("");
    const [price, setPrice] = React.useState(""); 
    const [featureName, setFeatureName] = React.useState("");
    const [featureValue, setFeatureValue] = React.useState("");
    const [features, setFeatures] = useState([{ name: "", value: "" }]);
    const [images, setImages] = useState<{id: Number; file: File | null }[]>([{ id: 0, file: null }]);


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

    const handleImageChange = (index: number, file: File | null) => {
        const updatedImages = [...images];
        updatedImages[index].file = file;
        setImages(updatedImages);
    };

    const addImage = () => {
        setImages([...images, { id: images.length, file: null }]);
    };

    const removeImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedAvailability, setSelectedAvailability] = useState("");
    const [selectedFeatured, setSelectedFeatured] = useState("");

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

    const handleAvailabilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAvailability(e.target.value);
    };

    const handleFeaturedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFeatured(e.target.value);
    };

    const [showResetPopup, setShowResetPopup] = useState(false);

    const resetForm = () => {
        setName("");
        setShortDes("");
        setDes("");
        setModel("");
        setOldPrice("");
        setPrice("");
        setFeatures([{ name: "", value: ""}]);
        setImages([{ id: 0, file: null }]);
        setSelectedCategory("");
        setSelectedSubCategory("");
        setSelectedBrand("");
        setSelectedAvailability("");
        setSelectedFeatured("");
    };

    const handleResetClick = () => {
        setShowResetPopup(true);
    };

    const handleConfirmReset = () => {
        resetForm();
        setShowResetPopup(false);
    };

    const handleCancelReset = () => {
        setShowResetPopup(false);
    };
    
    const handleAddProduct = async () => {
        const productData = {
            id: 0,              
            name: name,      
            model: model,       
            description: des,  
            point_desc: "",    
            old_price: parseFloat(oldPrice), 
            price: parseFloat(price),       
            image_01: "image_01", 
            image_02: "image_02",  
            image_03: "image_03",  
            category: selectedCategory,  
            sub_category: selectedSubCategory,    
            availability: selectedAvailability, 
            featured: selectedFeatured === "true",
        };

        try {
            await addProduct(productData);
            resetForm();
            alert("product added successfully!");
        } catch (error) {
            console.error("Error adding product", error);
            alert("Failed to add product!");
        }
    };

    useEffect(() => {
        if (isEditMode && productId) {
            const fetchProduct = async () => {
                try {
                    const product = await getProduct(productId);
                    setName(product!.name);
                    setShortDes(product!.point_desc);
                    setDes(product!.description);
                    setModel(product!.model);
                    setOldPrice(product!.old_price.toString());
                    setPrice(product!.price.toString());
                    setSelectedCategory(product!.category);
                    setSelectedSubCategory(product!.sub_category || "");
                    setSelectedAvailability(product!.availability);
                    setSelectedFeatured(product!.featured ? "Yes" : "No" );
                } catch (error) {
                    console.error("Failed to fetch product details", error);
                }
            };
            fetchProduct();
        }
    }, [isEditMode, productId]);

    const hanldeSubmit = async () => {
        const productData = {
            id: productId || 0,
            name,
            point_desc: shortDes,
            description: des,
            model,
            old_price: parseFloat(oldPrice),
            price: parseFloat(price),
            category: selectedCategory,
            sub_category: selectedSubCategory,
            image_01: "img/tv.jpg",
            image_02: "img/tv.jpg",
            image_03: "img/tv.jpg",
            availability: selectedAvailability,
            featured: selectedFeatured === "Yes",
        };

        try {
            if (isEditMode) {
                await updateProduct(productId, productData);
                alert("Product updated successfully!");
            } else {
                await addProduct(productData);
                alert("Product added sucessfully!");
            } 
            router.push("/products");
        } catch (error) {
            console.error("Error saving product:", error);
            alert("Failed to save product.");
        }
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
                    </div>
                    <div className="filter-row">
                        <div className="filterdrop-container">
                            <label htmlFor="brand">Brand</label>
                            <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
                                <option value="">All Brands</option>
                                <option value="Brand A">Brand A</option>
                                <option value="Brand B">Brand B</option>
                                <option value="Brand C">Brand C</option>
                            </select>
                        </div>
                        <div className="filterdrop-container">
                            <label htmlFor="availability">Availability</label>
                            <select id="availability" value={selectedAvailability} onChange={handleAvailabilityChange}>
                                <option value="">Select Availability</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div className="filterdrop-container">
                            <label htmlFor="featured">Featured</label>
                            <select id="featured" value={selectedFeatured} onChange={handleFeaturedChange}>
                                <option value="">Select Featured</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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
                {images.map((image, index) => (
                    <div key={index} className="image-upload-container">
                        <div className="image-upload">
                            <div className="feature-head">
                                <FaImage/>
                                <label htmlFor={`image-${index}`}>Upload Image {index + 1}</label>
                            </div>
                            <input 
                                type="file"
                                id={`image-${index}`}
                                onChange={(e) => handleImageChange(index, e.target.files ? e.target.files[0] : null)}
                                accept="image/*"
                            />
                            {index > 0 && (
                                <button 
                                    className="remove-feature-btn"
                                    onClick={() => removeImage(index)}
                                >
                                    Remove <FaTrash className="remove-icon" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <div className="featurebtn-container">
                    <button onClick={addImage}>
                        Add More <FaPlus className="plus-icon" />
                    </button>
                </div>
            </div>
            <div className="addbtn-container">
            <button className="product-reset-btn" onClick={handleResetClick}>Reset</button>
                <button className="product-add-btn">Add Product</button>
            </div>

            {showResetPopup && (
                <div className="conf-overlay">
                    <div className="popup-box">
                        <h3>Are you sure you want to reset all values?</h3>
                        <div className="popup-buttons">
                            <button onClick={handleConfirmReset}>Yes</button>
                            <button onClick={handleCancelReset}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}