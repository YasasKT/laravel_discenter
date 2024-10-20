"use client";

import Image from "next/image";
import HeroSection from "@/components/heroSlide";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/featuredProducts";
import TopChoices from "@/components/topChoices";


const featuredProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  // Add more products as needed
];

const topChoices1 = [
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
  {
    id: 1,
    name: "Product 1",
    price: 1200,
    image_01: "product1.jpg",
    availability: "in stock",
    category: "electronics",
  },
];

const getMainCategoryName = (category: string) => {
  // Implement logic to get the main category name if needed
  return category;
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts products={featuredProducts} />
      <TopChoices
        products={topChoices1}
        getMainCategoryName={getMainCategoryName}
        heading="Top Choices"
        subheading="Discount Center"
        buttonText="Shop All Appliances"
        buttonLink="/shop-all"
        reverseLayout={false}
      />
      <TopChoices
        products={topChoices1}
        getMainCategoryName={getMainCategoryName}
        heading="Top Choices"
        subheading="Discount Center"
        buttonText="Shop All Appliances"
        buttonLink="/shop-all"
        reverseLayout={true}
      />
    </div>
  );
};