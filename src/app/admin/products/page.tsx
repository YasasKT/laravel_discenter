"use client";
import { useEffect, useState } from "react";
import { LuPackage2 } from "react-icons/lu";
import { MdEdit, MdCheckCircle, MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import "@/css/Products.css";
import "@/css/BrandAdmin.css";

interface Product {
    id: number;
    name: string;
    category: string;
    brand: string;
    color: string;
    size: string;
    price: number;
    discountedPrice: number;
    status: boolean;
    isVerified: boolean;
    image?: string;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: "Product A",
            category: "Electronics",
            brand: "Brand A",
            color: "Red",
            size: "M",
            price: 100, 
            discountedPrice: 80,
            status: true,
            isVerified: true,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 1,
            name: "Product A",
            category: "Electronics",
            brand: "Brand A",
            color: "Red",
            size: "M",
            price: 100, 
            discountedPrice: 80,
            status: true,
            isVerified: true,
            image: "https://via.placeholder.com/100"
        },
        {
            id: 1,
            name: "Product A",
            category: "Electronics",
            brand: "Brand A",
            color: "Red",
            size: "M",
            price: 100, 
            discountedPrice: 80,
            status: true,
            isVerified: false,
            image: "https://via.placeholder.com/100"
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
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

    const filterProducts = products.filter(product => {
        return (
            (selectedCategory ? product.category === selectedCategory : true) &&
            (selectedBrand ? product.brand === selectedBrand : true) &&
            (selectedColor ? product.size === selectedColor : true) &&
            (selectedSize ? product.size === selectedSize : true)
        );
    });

    const handleReset = () => {
        setSelectedCategory("");
        setSelectedBrand("");
        setSelectedColor("");
        setSelectedSize("");
    };

    const toggleStatus = (id: number) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === id ? { ...product, status: !product.status } : product
            )
        );
    };

    const verifyProduct = (id: number, status: boolean) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === id ? { ...product, isVerified: status} : product
            )
        );
    };

    const [iconSize, setIconSize] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setIconSize(20);
            } else if (width <= 768) {
                setIconSize(24);
            } else {
                setIconSize(30);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(
        (product) => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="products-page">
            <section className="filter-section">
                <h3>Filter Products</h3>
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
                            <label htmlFor="brand">Brand</label>
                            <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
                                <option value="">All Brands</option>
                                <option value="Brand A">Brand A</option>
                                <option value="Brand B">Brand B</option>
                                <option value="Brand C">Brand C</option>
                            </select>
                        </div>

                        <div className="filterdrop-container">
                            <label htmlFor="color">Color</label>
                            <select id="color" value={selectedColor} onChange={handleColorChange}>
                                <option value="">All Colors</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                            </select>
                        </div>

                        <div className="filterdrop-container">
                            <label htmlFor="size">Size</label>
                            <select id="size" value={selectedSize} onChange={handleSizeChange}>
                                <option value="">All Sizes</option>
                                <option value="S">Small (S)</option>
                                <option value="M">Medium (M)</option>
                                <option value="L">Large (L)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="filter-buttons">
                    <button className="reset-btn" onClick={handleReset}>Reset</button>
                    <button className="apply-btn">Filter Data</button>
                </div>
            </section>
            <section>
            <div className="brand-list">
                    <div className="title-brands">
                        <LuPackage2 />
                        <h3>Product List</h3>
                    </div>
                    <div className="searchbar">
                        <input 
                            type="text"
                            placeholder="Search Products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="brand-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Thumbnail</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Discount Price</th>
                                    <th>Verify Status</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>
                                            {product.image ? (
                                                <img src={product.image} alt={product.name} width="70" />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td>{product.name}</td>
                                        <td>${product.price.toFixed(2)}</td>
                                        <td>${product.discountedPrice.toFixed(2)}</td>
                                        <td>
                                            {product.isVerified ? (
                                                <div className="verify-status">
                                                    <MdCheckCircle 
                                                        className="verified-icon"
                                                        size={iconSize}
                                                        onClick={() => verifyProduct(product.id, false)}
                                                    />
                                                    <span className="verify-appr">Approved</span> 
                                                </div>
                                            ) : (
                                                <div className="verify-status">
                                                    <MdCancel 
                                                        className="deny-icon"
                                                        size={iconSize}
                                                        onClick={() => verifyProduct(product.id, true)}
                                                    />
                                                    <span className="verify-den">Denied</span>
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <label className="toggle-switch">
                                                <input 
                                                    type="checkbox"
                                                    checked={product.status}
                                                    onChange={() => toggleStatus(product.id)}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <span className="action-icon">
                                                <FaEye size={iconSize} className="action-see"/>
                                                <MdEdit size={iconSize}/>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pagination">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt; Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={index + 1 === currentPage ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next &gt;
                    </button>
                </div>
            </section>
        </div>
    )
}