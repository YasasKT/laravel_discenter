import React from "react";
import Image from "next/image";
import '../css/FeaturedProducts.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image_01: string;
  availability: string;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const getMainCategoryName = (category: string) => {
    // Replace this with your logic to fetch the main category name
    return category;
  };

  return (
    <div>
      <div className="separator">
        <h4>Featured Products</h4>
        <div className="line"></div>
      </div>
      <div className="featured-products-container">
        {products.map((product) => (
          <div
            key={product.id}
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
                  src={`/uploaded_img/${product.image_01}`}
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
                  <span className="price">
                    Rs. {product.price.toLocaleString()}
                  </span>
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
                  <button
                    className="heart-icon fa-regular fa-heart"
                    type="submit"
                    name="add_to_wishlist"
                  ></button>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
