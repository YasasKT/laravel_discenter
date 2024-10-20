import React, { useState } from "react";
import { FaShoppingCart, FaCube, FaBoxOpen, FaSignOutAlt, FaHome, FaPalette, FaRulerCombined, FaTags } from "react-icons/fa";
import { CgMenu, CgProfile } from "react-icons/cg";
import logo from '../../public/img/dclogocrop.jpg';
import '@/css/adminSidebar.css';

const Sidebar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string>("Dashboard");
    const [showOrders, setShowOrders] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    return (
        <div className="admin-sidebar">
            <div className="sidebar-button"><CgMenu size={20} /></div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div
                className={`menu-title ${activeMenu === "Dashboard" ? "active" : ""}`}
                onClick={() => handleMenuClick("Dashboard")}
            >
                <FaHome />
                <span>Dashboard</span>
            </div>

            <div className="menu-section">
                <div
                    className={`menu-title ${activeMenu === "Order Management" ? "active" : ""}`}
                    onClick={() => {
                        setShowOrders(!showOrders);
                        handleMenuClick("Order Management");
                    }}
                >
                    <FaShoppingCart />
                    <span>Order Management</span>
                </div>
                {showOrders && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <span>All</span> <span className="count">+10</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Pending</span> <span className="count">+5</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Confirm</span> <span className="count">+3</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Processing</span> <span className="count">+3</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Pickup</span> <span className="count">+3</span>
                        </div>
                        <div className="dropdown-item">
                            <span>On the way</span> <span className="count">+3</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Delivered</span> <span className="count">+3</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Cancelled</span> <span className="count">+3</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="menu-section">
                <h3>Product Variants</h3>
                <div
                    className={`menu-item ${activeMenu === "Brand" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Brand")}
                >
                    <FaTags />
                    <span>Brand</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "Color" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Color")}
                >
                    <FaPalette />
                    <span>Color</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "Units" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Units")}
                >
                    <FaRulerCombined />
                    <span>Units</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "Sizes" ? "active" : ""}`}
                    onClick={() => handleMenuClick("Sizes")}
                >
                    <FaBoxOpen />
                    <span>Sizes</span>
                </div>
            </div>

            <div className="menu-section">
                <div
                    className={`menu-title ${activeMenu === "Product Management" ? "active" : ""}`}
                    onClick={() => {
                        setShowCategories(!showCategories);
                        handleMenuClick("Product Management");
                    }}
                >
                    <FaCube />
                    <span>Product Management</span>
                </div>
                {showCategories && (
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <span>Categories</span>
                        </div>
                        <div className="dropdown-item">
                            <span>Sub Categories</span>
                        </div>
                    </div>
                )}
            </div>

            <div
                className={`menu-title ${activeMenu === "Profile" ? "active" : ""}`}
                onClick={() => handleMenuClick("Profile")}
            >
                <CgProfile />
                <span>Profile</span>
            </div>

            <div className="logout-section">
                <FaSignOutAlt />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;
