"use client"
import HeroSectionShop from "./ShopComp/heroShop";
import CategorySection from "./ShopComp/categorySection";
import PriceFilter from "./ShopComp/priceFilter";
import FilterDropdowns from "./ShopComp/filterDropdowns";
import Pagination from "../components/pagination";
import '../css/Shop.css';
import { useState } from "react";

export default function Shop() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Fetching products for page ${page}`);
    };
    
    return (
        <div>
            <HeroSectionShop />
            <CategorySection />
            <div className="filter-bar-container">
                <PriceFilter />
                <FilterDropdowns />
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}