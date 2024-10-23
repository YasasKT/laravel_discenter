"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import {
  FaShoppingCart,
  FaCube,
  FaBoxOpen,
  FaSignOutAlt,
  FaHome,
  FaPalette,
  FaRulerCombined,
  FaTags,
} from "react-icons/fa";
import "@/css/adminSidebar.css";
import { CgMenu } from "react-icons/cg";


interface AdminSidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const [showOrders, setShowOrders] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="admin-slider">
        <CgMenu size={20} onClick={toggleSidebar} />
      </div>
      <div className="admin-logo">
        <img src="/img/dclogocrop.jpg" alt="logo" />
      </div>
      <div className={`menu-item ${isActive("/admin") ? "active" : ""}`} onClick={() => router.push('/admin')}>
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div className="menu-section">
        <div className="menu-title">
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
        <div className={`menu-item ${isActive("/admin/brands") ? "active" : ""}`} onClick={() => router.push('/admin/brands')}>
          <FaTags />
          <span>Brand</span>
        </div>
        <div className={`menu-item ${isActive("/admin/colors") ? "active" : ""}`} onClick={() => router.push('/admin/colors')}>
          <FaPalette />
          <span>Color</span>
        </div>
        <div className={`menu-item ${isActive("/admin/units") ? "active" : ""}`} onClick={() => router.push('/admin/units')}>
          <FaRulerCombined />
          <span>Units</span>
        </div>
        <div className={`menu-item ${isActive("/admin/sizes") ? "active" : ""}`} onClick={() => router.push('/admin/sizes')}>
          <FaBoxOpen />
          <span>Sizes</span>
        </div>
      </div>

      <div className="menu-section">
        <div
          className="menu-title"
          onClick={() => setShowCategories(!showCategories)}
        >
          <FaCube />
          <span>Product Management</span>
        </div>
        {showCategories && (
          <div className="dropdown-content">
            <div className={`dropdown-item ${isActive("/admin/categories") ? "active" : ""}`} onClick={() => router.push('/admin/categories')}>
              <span>Categories</span>
            </div>
            <div className={`dropdown-item ${isActive("/admin/sub-categories") ? "active" : ""}`} onClick={() => router.push('/admin/sub-categories')}>
              <span>Sub Categories</span>
            </div>
          </div>
        )}
      </div>

      <div className="menu-item">
        <FaCube />
        <span>Profile</span>
      </div>

      <div className="admin-logout-section">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
