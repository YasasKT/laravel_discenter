import Image from 'next/image';
import Link from 'next/link';
import '../css/choiceRight.css';
import Imageback from '../img/home-appliances.jpg';

const TopChoicesRight: React.FC = () => {
  const products2 = [
    { id: 4, name: 'Product 4', price: 4000, image: 'image4.jpg', category: 'Category 4' },
    { id: 5, name: 'Product 5', price: 5000, image: 'image5.jpg', category: 'Category 5' },
    { id: 6, name: 'Product 6', price: 6000, image: 'image6.jpg', category: 'Category 6' },
  ];

  return (
    <div className="top-choices">
      <div className="top-products-container">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="text-field-right">
              <div className="heading">Top Choices</div>
              <div className="subheading">Exclusive Deals</div>
            </div>

            <div className="grid-container">
              {products2.map((product) => (
                <form key={product.id} method="post">
                  <input type="hidden" name="pid" value={product.id} />
                  <input type="hidden" name="name" value={product.name} />
                  <input type="hidden" name="price" value={product.price} />
                  <input type="hidden" name="image" value={product.image} />
                  <input type="hidden" name="qty" value="1" />

                  <div className="product-card">
                    <a className="image-container" href={`/product_view.php?pid=${product.id}`}>
                      <Image src={`/uploaded_img/${product.image}`} alt={product.name} layout="fill" objectFit="cover" />
                    </a>
                    <div className="details">
                      <span className="category-name">{product.category}</span>
                      <a href={`/product_view.php?pid=${product.id}`}>
                        <span className="product-name" title={product.name}>
                          {product.name}
                        </span>
                      </a>
                      <hr />
                      <div className="loop-btn">
                        <span className="price">Rs. {product.price}</span>
                        <button className="option-btn" type="submit" name="add_to_cart">Add to Cart</button>
                        <button className="heart-icon fa-regular fa-heart" type="submit" name="add_to_wishlist"></button>
                      </div>
                    </div>
                  </div>
                </form>
              ))}
            </div>

            <div className="button-right">
              <Link href="/shop-all">
                <span className="btn">Shop All Appliances</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChoicesRight;