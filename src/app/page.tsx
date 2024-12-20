"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import HeroSection from "../components/heroSlide";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/featuredProducts";
import TopChoices from "../components/topChoices";
import { fetchProducts } from './network/products_api';

interface Product {
  id: number;
  name: string;
  price: number;
  image_01: string;
  availability: string;
  category: string;
}

// Helper function
const getMainCategoryName = (category: string) => {
  // Implement logic to get the main category name if needed
  return category;
};

export default function Home() {
  // Explicitly type the state as Product[]
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [topChoices, setTopChoices] = useState<Product[]>([]);

  // Fetch products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts: Product[] = await fetchProducts();

        const featured = allProducts.slice(0, 10);
        const topChoices = allProducts.slice(10, 13);

        setFeaturedProducts(featured);
        setTopChoices(topChoices);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts products={featuredProducts} />
      <TopChoices
        products={topChoices}
        getMainCategoryName={getMainCategoryName}
        heading="Top Choices"
        subheading="Discount Center"
        buttonText="Shop All Appliances"
        buttonLink="/shop-all"
        reverseLayout={false}
      />
      <TopChoices
        products={topChoices}
        getMainCategoryName={getMainCategoryName}
        heading="Top Choices"
        subheading="Discount Center"
        buttonText="Shop All Appliances"
        buttonLink="/shop-all"
        reverseLayout={true}
      />
    </div>
  );
}
