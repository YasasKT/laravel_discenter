import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  name: string;
  price: number;
  image_01: string;
  availability: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  getMainCategoryName: (category: string) => string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  getMainCategoryName,
}) => {
  const [hover, setHover] = useState(false);
  const placeholderImage = "/img/placeholder.jpg";

  return (
    <div
      className={`product-card ${
        product.availability === "out of stock" ? "out-of-stock" : ""
      }`}
    >
      <form method="post">
        <input type="hidden" name="pid" value={product.id} />
        <input type="hidden" name="name" value={product.name} />
        <input type="hidden" name="price" value={product.price} />
        <input type="hidden" name="image" value={product.image_01} />
        <input type="hidden" name="qty" value="1" />
        <a
          className={`image-container ${
            product.availability === "out of stock" ? "out-of-stock" : ""
          }`}
          href={`/product_view?pid=${product.id}`}
        >
          <Image
            src={placeholderImage}
            alt={product.name}
            width={250}
            height={250}
          />
        </a>
        <div className="details">
          <span className="category-name">
            {getMainCategoryName(product.category)}
          </span>
          <a href={`/product_view?pid=${product.id}`}>
            <span className="product-name" title={product.name}>
              {product.name}
            </span>
          </a>
          <hr />
          <div className="loop-btn">
            <span className="price">Rs. {product.price.toLocaleString()}</span>
            {product.availability === "out of stock" ? (
              <button
                className="btn"
                type="submit"
                name="out_of_stock"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <button className="option-btn" type="submit" name="add_to_cart">
                Add to Cart
              </button>
            )}
            {/* <button
              className="heart-icon fa-regular fa-heart"
              type="submit"
              name="add_to_wishlist"
            ></button> */}
            <button
              className="heart-icon"
              type="submit"
              name="add_to_wishlist"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <FontAwesomeIcon icon={hover ? solidHeart : regularHeart} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCard;