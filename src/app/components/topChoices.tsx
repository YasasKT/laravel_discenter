import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import '../css/TopChoices.css';
import HomeAppliances from '../img/home-appliances.jpg';
import { useState } from 'react';

const TopChoices: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);  
  const products1 = [
    { id: 1, name: 'Product 10', price: 400, image: 'product1.jpg', category: 'Refrigerator' },
    { id: 2, name: 'Product 9', price: 600, image: 'product2.jpg', category: 'Refrigerator' },
    { id: 3, name: 'Product 8', price: 150, image: 'product3.jpg', category: 'Refrigerator' },
  ];

  return (
    <div className="top-choices">
      <div className="bg-image">
        <Image src={HomeAppliances} alt="Home Appliances" layout="fill" objectFit="cover" />
      </div>

      <div className="top-products-container">
        <div className="text-field">
          <div className="heading">Top Choices</div>
          <div className="subheading">Discount Center</div>
        </div>

        <div className="grid-container">
          {products1.map((product) => (
            <form key={product.id} method="post">
              <input type="hidden" name="pid" value={product.id} />
              <input type="hidden" name="name" value={product.name} />
              <input type="hidden" name="price" value={product.price} />
              <input type="hidden" name="image" value={product.image} />
              <input type="hidden" name="qty" value="1" />

              <div className="product-card">
                <Link href={`/product_view.php?pid=${product.id}`}>
                  <div className="image-container">
                    <Image src={`/uploaded_img/${product.image}`} alt={product.name} layout="fill" objectFit="cover" />
                  </div>
                </Link>
                <div className="details">
                  <span className="category-name">{product.category}</span>
                  <Link href={`/product_view.php?pid=${product.id}`}>
                    <span className="product-name" title={product.name}>
                      {product.name}
                    </span>
                  </Link>
                  <hr />
                  <div className="loop-btn">
                    <span className="price">Rs. {product.price}</span>
                    <button className="option-btn" type="submit" name="add_to_cart">Add to Cart</button>
                    <button 
                      className='heart-icon' 
                      type='submit' 
                      name="add_to-wishlist"
                      onMouseEnter={() => setHovered(product.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {hovered === product.id ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ))}
        </div>

        <div className="button-link">
          <Link href="/shop-all">
            <span className="btn-link">Shop All Appliances</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopChoices;
