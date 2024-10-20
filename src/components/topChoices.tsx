import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from '../components/ProductCard';
import HomeAppliances from "../img/home-appliances.jpg";
import "../css/TopChoices.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image_01: string;
  availability: string;
  category: string;
}

interface TopChoicesProps {
  products: Product[];
  getMainCategoryName: (category: string) => string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  reverseLayout?: boolean;
}

const TopChoices: React.FC<TopChoicesProps> = ({
  products,
  getMainCategoryName,
  heading,
  subheading,
  buttonText,
  buttonLink,
  reverseLayout = false,
}) => {
  return (
    <div className={`top-choices ${reverseLayout ? "reverse-layout" : ""}`}>
      <div className="bg-image">
        <Image
          src={HomeAppliances}
          alt="Home Appliances"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="top-products-container">
        <div className="text-field">
          <div className="heading">{heading}</div>
          <div className="subheading">{subheading}</div>
        </div>

        <div className="grid-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              getMainCategoryName={getMainCategoryName}
            />
          ))}
        </div>

        <div className="button-container">
          <Link href={buttonLink}>
            <span className="btn-text">{buttonText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopChoices;