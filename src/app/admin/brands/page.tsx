"use client"
import React, { useState } from "react"
import { TbBrandWindows } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import TopSection from "@/components/AdminTopSection";
import '@/css/BrandAdmin.css';

interface Brand {
    id: number;
    name: string;
    status: boolean;
};

export default function Brands() {

    //NEED TO ADD PAGINATION

    const [brands, setBrands] = useState<Brand[]>([
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: false },
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: false },
    ]);

    const handleCreateNew = () => {
        console.log('Create New Clicked!');
    };

    const toggleStatus = (id: number) => {
        setBrands(prevBrands => 
            prevBrands.map(brand => 
                brand.id === id ? { ...brand, status: !brand.status } : brand
            )
        );
    };

    return (
        <div>
            <TopSection
                title="Product Variants"
                pageLabel="Brand List"
                buttonText="Create New"
                onButtonClick={handleCreateNew}
            />
            <section>
            <div className="brand-list">
                <div className="title-brands">
                    <TbBrandWindows />
                    <h3>Brands</h3>
                </div>
                <div className="brand-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Brand ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map(brand => (
                                <tr key={brand.id}>
                                    <td>{brand.id}</td>
                                    <td>{brand.name}</td>
                                    <td>
                                        <label className="toggle-switch">
                                            <input 
                                                type="checkbox"
                                                checked={brand.status}
                                                onChange={() => toggleStatus(brand.id)}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <span className="action-icon">
                                            <MdEdit size={30}/>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </section>
        </div>
    )
} 