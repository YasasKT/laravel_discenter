import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import {
  FaTimes,
  FaSearch,
  FaPlus,
  FaChevronDown,
  FaShoppingCart,
  FaChevronRight,
  FaHeadset,
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

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

    // Set example categories data
    setCategories(exampleCategories);
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
              <FaPlus />
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
        <FaTimes className="fa-xmark" onClick={toggleSidebar} />
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
          <button>
            <FaSearch size={18}/>
          </button>
        </div>

        <div className="info-container">
          <div className="info-bar">
            <FaHeadset size={25}/>
            <div className="info-text">
              <span className="info-subheading">Customer Support</span>
              <span className="info-heading">071 040 9000</span>
            </div>
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
              <FaPlus/>
            </div>
          </li>
          <li className="cat">
            <a href="categories.php">Categories</a>
            <div
              className="more"
              onClick={(e) => handleToggle(e, "categories")}
            >
              <FaPlus />
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
            <span className="icon-wishcart">
              <FaHeart size={20}/>
            </span>
            <a href="wishlist.php">Wishlist</a>
          </li>
          <li>
            <span className="icon-wishcart">
              <FaShoppingCart size={20}/>
            </span>
            <a href="cart.php">Cart</a>
          </li>
        </ul>

        <ul className="socials">
          <li className="facebook">
            <FaFacebookF />
          </li>
          <li className="insta">
            <FaInstagram />
          </li>
          <li className="tiktok">
            <FaTiktok />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
