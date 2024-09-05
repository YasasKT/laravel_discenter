"use client"

import Image from "next/image";
import HeroSection from "./components/heroSlide";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/featuredProducts";
import TopChoices from "./components/topChoices";
import NewTopChoices from "./components/newTopChoices"

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



export default function Home() {
  return (
        <div>
          <HeroSection />
          <Categories />
          <FeaturedProducts products={featuredProducts} />
          <TopChoices />
          <NewTopChoices />
        </div>
  );
}
