import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faSearch,
  faPlus,
  faChevronDown,
  faCartShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface Category {
  id: string;
  name: string;
  parent_id: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Example categories data
    const exampleCategories: Category[] = [
      { id: "1", name: "Electronics", parent_id: "0" },
      { id: "2", name: "Clothing", parent_id: "0" },
      { id: "3", name: "Home & Kitchen", parent_id: "0" },
      { id: "4", name: "Phones", parent_id: "1" },
      { id: "5", name: "Laptops", parent_id: "1" },
      { id: "6", name: "Headphones", parent_id: "1" },
      { id: "7", name: "Men's Wear", parent_id: "2" },
      { id: "8", name: "Women's Wear", parent_id: "2" },
      { id: "9", name: "Furniture", parent_id: "3" },
      { id: "10", name: "Appliances", parent_id: "3" },
    ];

    // Fetch categories from your API (commented out for example purposes)
    // const fetchCategories = async () => {
    //   try {
    //     const response = await fetch("/api/categories"); // Adjust the API endpoint as needed
    //     const data = await response.json();
    //     setCategories(data);
    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };

    // Set example categories data
    setCategories(exampleCategories);
    // fetchCategories();
  }, []);

  useEffect(() => {
    const pageContent = document.querySelector(".page-content");

    if (sidebarOpen) {
      pageContent?.classList.add("sidebar-open", "dark-overlay");
    } else {
      pageContent?.classList.remove("sidebar-open", "dark-overlay");
    }

    return () => {
      pageContent?.classList.remove("sidebar-open", "dark-overlay");
    };
  }, [sidebarOpen]);

  const handleToggle = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    categoryId: string
  ) => {
    const target = event.currentTarget.nextElementSibling as HTMLElement;
    target.classList.toggle("active");

    // Add/Remove the 'expanded' class for subcategories
    const subcategories = document.querySelectorAll(
      `.subcat[data-parent="${categoryId}"]`
    );
    subcategories.forEach((subCategory) => {
      subCategory.classList.toggle("expanded");
    });
  };

  const renderSubCategories = (parentId: string) => {
    const subCategories = categories.filter(
      (cat) => cat.parent_id === parentId
    );
    if (subCategories.length === 0) return null;

    return (
      <ul className="subcategories">
        {subCategories.map((subCategory) => (
          <li key={subCategory.id} className="subcat">
            <a href="#">{subCategory.name}</a>
            <div
              className="more"
              onClick={(e) => handleToggle(e, subCategory.id)}
            >
              <FontAwesomeIcon icon={faPlus} className="fas fa-plus" />
            </div>
            <ul className="sub-subcategories">
              {renderSubCategories(subCategory.id)}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="fa-xmark"
          onClick={toggleSidebar}
        />
        {/* Sidebar content here */}

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
          <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
        </div>

        <div className="info-container">
          <div className="info-bar">
            <i className="fa-solid fa-headset"></i>
            <div className="info-text">
              <span className="info-subheading">Customer Support</span>
              <span className="info-heading">071 040 9000</span>
            </div>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <br />
          <div className="info-details">
            <div className="city">Bellanwila</div>
            <div className="number">071 040 9000</div>
            <div className="address">393/2, Dehiwala Road, Bellanwila</div>
            <div className="email">info@daedal.lk</div>
            <div className="icons">{/* Add any icons you need */}</div>
          </div>
        </div>

        <ul className="expand">
          <li>
            <a href="shop.php">Shop</a>
            <div className="more">
              <FontAwesomeIcon icon={faPlus} className="fas fa-plus" />
            </div>
          </li>
          <li className="cat">
            <a href="categories.php">Categories</a>
            <div
              className="more"
              onClick={(e) => handleToggle(e, "categories")}
            >
              <FontAwesomeIcon icon={faPlus} className="fas fa-plus" />
            </div>
          </li>
          {renderSubCategories("0")}{" "}
          {/* Assuming '0' is the parent ID for main categories */}
        </ul>

        <ul className="fixed">
          <li>
            <a href="index.php">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <ul className="fixed">
          <li>
            <i className="fas fa-heart"></i>
            <a href="wishlist.php">Wishlist</a>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <a href="cart.php">Cart</a>
          </li>
        </ul>

        <ul className="socials">
          <li className="facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li className="insta">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="tiktok">
            <i className="fa-brands fa-tiktok"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
