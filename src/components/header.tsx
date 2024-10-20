"use client";

import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faHeadset,
  faChevronDown,
  faCartShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";

// Define types for categories
interface Category {
  id: number;
  name: string;
  subcategories?: Category[];
}

interface CartInfo {
  itemCount: number;
  totalPrice: number;
}

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cartInfo, setCartInfo] = useState<CartInfo>({
    itemCount: 0,
    totalPrice: 0,
  });
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  useEffect(() => {
    // Example categories data
    const exampleCategories: Category[] = [
      {
        id: 1,
        name: "Electronics",
        subcategories: [
          { id: 11, name: "Phones" },
          { id: 12, name: "Laptops" },
          { id: 13, name: "Headphones" },
        ],
      },
      {
        id: 2,
        name: "Clothing",
        subcategories: [
          { id: 21, name: "Men's Wear" },
          { id: 22, name: "Women's Wear" },
        ],
      },
      {
        id: 3,
        name: "Home & Kitchen",
        subcategories: [
          { id: 31, name: "Furniture" },
          { id: 32, name: "Appliances" },
        ],
      },
    ];

    // Fetch categories from the Laravel API
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories"); // Adjust the API endpoint as needed
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    // Fetch cart info from the Laravel API
    const fetchCartInfo = async () => {
      try {
        const response = await fetch("/api/cart"); // Adjust the API endpoint as needed
        const data = await response.json();
        setCartInfo({
          itemCount: data.itemCount || 0,
          totalPrice: data.totalPrice || 0,
        });
      } catch (error) {
        console.error("Failed to fetch cart info:", error);
      }
    };

    // Set example categories data
    setCategories(exampleCategories);
    // fetchCategories();
    fetchCartInfo();
  }, []);

  return (
    <>
      <header className="header">
        <section className="flex">
          <a href="/" className="logo">
            <img src="/img/dclogocrop.jpg" alt="DC Logo" />
          </a>

          <div className="right-items">
            <div className="menu-btn" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
              <span className="menu-heading">menu</span>
            </div>
            <div className="search-bar">
              <input
                type="text"
                name="search-box"
                id="search-box"
                className="search-box"
                placeholder="Search for products"
                maxLength={100}
                required
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="info-container">
              <div className="info-bar">
                <FontAwesomeIcon icon={faHeadset} />
                <div className="info-text">
                  <span className="info-subheading">Customer Support</span>
                  <span className="info-heading">071 040 9000</span>
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="info-details">
                <div className="city">Bellanwila</div>
                <div className="number">071 040 9000</div>
                <div className="address">393/2, Dehiwala Road, Bellanwila</div>
                <div className="email">info@daedal.lk</div>
              </div>
            </div>

            <a href="/cart">
              <div className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="cart-info">
                  <span className="subheading">{cartInfo.itemCount} items</span>
                  <span className="heading">
                    {cartInfo.totalPrice.toLocaleString()} LKR
                  </span>
                </div>
                <div className="cart-notification">{cartInfo.itemCount}</div>
              </div>
            </a>
          </div>
        </section>

        <hr
          style={{ borderTop: "1px solid whitesmoke" }}
          className="header-bottom-border"
        />

        <nav className="navbar">
          <ul>
            <li className="home-link">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">
                Shop <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <div className="subnav">
                <ul>
                  <li>
                    <a href="/cart">
                      <FontAwesomeIcon icon={faChevronRight} /> Cart
                    </a>
                  </li>
                  <li>
                    <a href="/wishlist">
                      <FontAwesomeIcon icon={faChevronRight} /> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="/account">
                      <FontAwesomeIcon icon={faChevronRight} /> My account
                    </a>
                  </li>
                  <li>
                    <a href="/orders">
                      <FontAwesomeIcon icon={faChevronRight} /> My Orders
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/categories">
                Categories <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <div className="subnav">
                <ul>
                  {categories.map((mainCategory) => (
                    <li key={mainCategory.id}>
                      <a href={`/category/${mainCategory.name}`}>
                        <FontAwesomeIcon icon={faChevronRight} />{" "}
                        {mainCategory.name}
                      </a>
                      {mainCategory.subcategories && (
                        <div className="subsubnav">
                          <ul>
                            {mainCategory.subcategories.map((subcategory) => (
                              <li key={subcategory.id}>
                                <a href={`/category/${subcategory.name}`}>
                                  <FontAwesomeIcon icon={faChevronRight} />{" "}
                                  {subcategory.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
