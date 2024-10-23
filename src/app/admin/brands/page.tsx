"use client"
import React, { useEffect, useState } from "react"
import { TbBrandWindows } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import PopupAddNew from "@/components/PopupAddNew";
import '@/css/BrandAdmin.css';
import { HiMiniPlusCircle } from "react-icons/hi2";

interface Brand {
    id: number;
    name: string;
    status: boolean;
};

export default function Brands() {

    const [brands, setBrands] = useState<Brand[]>([
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: false },
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: true },
        { id: 1, name: "LG", status: false },
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const addBrand = (name: string, color: string, status: boolean, image?: string) => {
        const newBrand: Brand = {
            id: brands.length + 1,
            name,
            status
        };
        setBrands(prevBrands => [...prevBrands, newBrand]);
        setShowPopup(false)
    };

    const handleCreateNew = () => {
        setShowPopup(true);
    };

    const toggleStatus = (id: number) => {
        setBrands(prevBrands => 
            prevBrands.map(brand => 
                brand.id === id ? { ...brand, status: !brand.status } : brand
            )
        );
    };

    const [iconSize, setIconSize] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <=480) {
                setIconSize(20);
            } else if (width <= 768) {
                setIconSize(24);
            } else {
                setIconSize(30);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(brands.length / itemsPerPage);

    const currentBrands = brands.slice(
        (currentPage -1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateBrand = (name: string, color: string, status: boolean, image?: string) => {
        console.log("Created brand:", { name, status });
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
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
            <div className="next-text">
          <h2 className="page-label">Manage Brands</h2>
          <button className="create-new" onClick={onButtonClick}>
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
                                        <span className="action-icon">
                                            <MdEdit size={iconSize}/>
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