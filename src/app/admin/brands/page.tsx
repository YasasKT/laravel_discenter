"use client"
import React, { useEffect, useState } from "react"
import { TbBrandWindows } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import PopupAddNew from "@/components/PopupAddNew";
import '@/css/BrandAdmin.css';
import { HiMiniPlusCircle } from "react-icons/hi2";
import { fetchBrands, addBrand, updateBrand, deleteBrand } from "@/app/network/brand_api";
import { stat } from "fs";

interface Brand {
    id: number;
    name: string;
    status: boolean;
};

export default function Brands() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editBrand, setEditBrand] = useState<Brand | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const loadBrands = async () => {
            try {
                const data = await fetchBrands();
                setBrands(data);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        };

        loadBrands();
    }, []);

    const handleCreateBrand = async (
        name: string,
        color: string,
        status: boolean,
        image?: string,
        category?: string
    ) => {
        const newBrand: Brand = { id: brands.length + 1, name, status }; // Only use `name` and `status` for now
        try {
            const addedBrand = await addBrand(newBrand);
            setBrands((prevBrands) => [...prevBrands, addedBrand]);
            setShowPopup(false);
        } catch (error) {
            console.error("Error adding brand:", error);
        }
    };

    const handleEditBrand = async (id: number, name: string, status: boolean) => {
        try {
            const updatedBrand = await updateBrand(id, { name, status });
            setBrands((prevBrands) => 
                prevBrands.map((brand) => 
                    brand.id === id ? { ...brand, name, status } : brand
                )
            );
            setEditBrand(null);
        } catch (error) {
            console.error("Error updating brand:", error);
        }
    };
    

    const toggleStatus = async (id: number) => {
        const brand = brands.find((b) => b.id === id);
        if (brand) {
            try {
                const updatedBrand = await updateBrand(id, { status: !brand.status });
                if (updatedBrand) {
                    setBrands((prevBrands) => 
                        prevBrands.map((b) =>
                            b.id === id ? { ...b, status: updatedBrand.status } : b
                        )
                    );
                }
            } catch (error) {
                console.error("Error updating brand:", error);
            }
        }
    };

    const totalPages = Math.ceil(brands.length / itemsPerPage);
    const currentBrands = brands.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    return (
            <section>
                {showPopup && (
                    <PopupAddNew
                    onClose={() => setShowPopup(false)}
                    onCreate={handleCreateBrand}
                    title="Create New Brand"
                    nameLabel="Brand Name"
                    placeholder="Enter brand name"
                    showColorPicker={false}
                />
                )}
                {editBrand && (
                    <PopupAddNew
                        onClose={() => setEditBrand(null)}
                        onCreate={(name, _, status) => 
                            handleEditBrand(editBrand.id, name, status)
                        }
                        title="Edit Brand"
                        nameLabel="Edit Brand Name"
                        placeholder="update brand name"
                        showColorPicker={false}
                        initialData={{
                            name: editBrand.name,
                            status: editBrand.status,
                        }}
                    />
                )}
            <div className="next-text">
          <h2 className="page-label">Manage Brands</h2>
          <button className="create-new" onClick={() => setShowPopup(true)}>
            <span className="new-icon">
              <HiMiniPlusCircle />
            </span>
            <span className="new-text">Add Brand</span>
          </button>
        </div>
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
                                        <span className="action-icon" onClick={() => setEditBrand(brand)}>
                                            <MdEdit size={30}/>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt; Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next &gt;
                </button>
            </div>
            </section>
    );
} 