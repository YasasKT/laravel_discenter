import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../css/Footer.css';

interface Product {
  id: number;
  name: string;
  image_01: string;
  price: number;
  old_price: number;
}

const Footer = () => {
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch latest products (replace with actual API call)
    setLatestProducts([
      {
        id: 1,
        name: 'Product 1',
        image_01: 'product1.jpg',
        price: 20000,
        old_price: 25000,
      },
      {
        id: 2,
        name: 'Product 2',
        image_01: 'product2.jpg',
        price: 20000,
        old_price: 25000,
      },
      {
        id: 3,
        name: 'Product 3',
        image_01: 'product3.jpg',
        price: 20000,
        old_price: 25000,
      },
      {
        id: 4,
        name: 'Product 4',
        image_01: 'product4.jpg',
        price: 20000,
        old_price: 25000,
      },
      // Add more mock products
    ]);

    // Fetch featured products (replace with actual API call)
    setFeaturedProducts([
      {
        id: 5,
        name: 'Product 5',
        image_01: 'product5.jpg',
        price: 15000,
        old_price: 18000,
      },
      {
        id: 6,
        name: 'Product 6',
        image_01: 'product6.jpg',
        price: 15000,
        old_price: 18000,
      },
      {
        id: 7,
        name: 'Product 7',
        image_01: 'product7.jpg',
        price: 15000,
        old_price: 18000,
      },
      {
        id: 8,
        name: 'Product 8',
        image_01: 'product8.jpg',
        price: 15000,
        old_price: 18000,
      },
      // Add more mock products
    ]);
  }, []);

  return (
    <footer className="footer">
      <section className="column-container">
        <ul className="column">
          <div className="footer-logo">
            <Image src="/img/dclogocrop.jpg" alt="DC Logo" width={300} height={100} />
          </div>
        </ul>

        <ul className="column">
          <h2 className="column-title">latest products</h2>
          {latestProducts.map((product) => (
            <li className="product-widget" key={product.id}>
              <a className="img-a" href={`/product_view/${product.id}`}>
                <div className="img-container">
                  <Image
                    src={`/uploaded_img/${product.image_01}`}
                    alt={product.name}
                    width={80}
                    height={80}
                  />
                </div>
              </a>
              <div className="details">
                <a className="name-a" href={`/product_view/${product.id}`}>
                  <span title={product.name} className="product-name">
                    {product.name}
                  </span>
                </a>
                <div className="prices">
                  <span className="newprice">Rs.{product.price.toLocaleString()}</span>
                  <span className="oldprice">Rs.{product.old_price.toLocaleString()}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="column">
          <h2 className="column-title">top products</h2>
          {featuredProducts.map((product) => (
            <li className="product-widget" key={product.id}>
              <a className="img-a" href={`/product_view/${product.id}`}>
                <div className="img-container">
                  <Image
                    src={`/uploaded_img/${product.image_01}`}
                    alt={product.name}
                    width={80}
                    height={80}
                  />
                </div>
              </a>
              <div className="details">
                <a className="name-a" href={`/product_view/${product.id}`}>
                  <span title={product.name} className="product-name">
                    {product.name}
                  </span>
                </a>
                <div className="prices">
                  <span className="newprice">Rs.{product.price.toLocaleString()}</span>
                  <span className="oldprice">Rs.{product.old_price.toLocaleString()}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="column">
          <h2 className="column-title">newsletter</h2>
          <div className="input-field">
            <input className="email" type="email" name="email" id="email" placeholder="Your email address" />
            <input className="btn" type="submit" value="SIGN UP" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
