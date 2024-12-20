"use client";

import HeroSectionShop from "./ShopComp/heroShop";
import CategorySection from "./ShopComp/categorySection";
import PriceFilter from "./ShopComp/priceFilter";
import FilterDropdowns from "./ShopComp/filterDropdowns";
import Pagination from "@/components/pagination";
import "@/css/Shop.css";
import { useState, useEffect } from "react";
import ProductList from "@/components/productList";
import { fetchProducts } from "../network/products_api";
import { fetchSubCategories } from "../network/category_api";
import { Category, SubCategory } from "../models/category";
import SubCategorySection from "./ShopComp/subcategorySection";

interface Product {
    id: number;
    name: string;
    price: number;
    image_01: string;
    availability: string;
    category: string;
}

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesVisible, setCategoriesVisible] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [subcategories, setSubCategories] = useState<SubCategory[]>([]);
    const productsPerPage = 10;
    const totalPages = 10;

    // Fetch products dynamically based on the current page
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const allProducts: Product[] = await fetchProducts();

                // Filter products by category if selected
                const filteredProducts = selectedCategory
                    ? allProducts.filter(product => product.category === selectedCategory.name)
                    : allProducts;
                
                // Calculate start and end indices for slicing
                const startIndex = (currentPage - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;

                const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
                setProducts(paginatedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        loadProducts();
    }, [currentPage, selectedCategory]);

    // Handle category selection
    const handleCategorySelect = async (category: Category) => {
        setSelectedCategory(category);
        setCategoriesVisible(false);

        try {
            const subCats = await fetchSubCategories(category.id);
            setSubCategories(subCats);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <HeroSectionShop />
            {categoriesVisible ? (
                <CategorySection onCategorySelect={handleCategorySelect} />
            ) : (
                <SubCategorySection subcategories={subcategories} />
            )}
            <div className="filter-bar-container">
                <PriceFilter />
                <FilterDropdowns />
            </div>
            <ProductList products={products} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
