"use client";
import PopupNew from "@/components/PopupAddNew";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";

interface SubCategory {
    id: number;
    name: string;
    status: boolean;
    category: string;
    image?: string;
}

export default function SubCategories() {
    const [subCategories, setSubCategories] = useState<SubCategory[]>([
        { id: 1, name: "Mobiles", status: true, category: "Electronics", image: "https://via.placeholder.com/100" },
        { id: 2, name: "Laptops", status: false, category: "Electronics", image: "https://via.placeholder.com/100" },
        { id: 3, name: "Clothing", status: true, category: "Fashion", image: "https://via.placeholder.com/100" },
        { id: 4, name: "Home Decor", status: true, category: "Home Appliances", image: "https://via.placeholder.com/100" },
        { id: 5, name: "Accessories", status: false, category: "Fashion", image: "https://via.placeholder.com/100" },
    ]);

    const [categories] = useState<string[]>(["Electronics", "Fashion", "Home Appliances"]);
    const [showPopup, setShowPopup] = useState(false);

    const addSubCategory = (name: string, status: boolean, category: string, image?: string) => {
        const newSubCategory: SubCategory = {
            id: subCategories.length + 1,
            name,
            status,
            category: category || "Uncategorized",
            image: image || "https://via.placeholder.com/100",
        };
        setSubCategories(prevSubCategories => [...prevSubCategories, newSubCategory]);
        setShowPopup(false);
    };

    const toggleStatus = (id: number) => {
        setSubCategories(prevSubCategories =>
            prevSubCategories.map(subCategory =>
                subCategory.id === id ? { ...subCategory, status: !subCategory.status } : subCategory
            )
        );
    };

    const [iconSize, setIconSize] = useState(30);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 480) {
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

    const totalPages = Math.ceil(subCategories.length / itemsPerPage);

    const currentSubCategories = subCategories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateSubCategory = (name: string, color: string, status: boolean, image?: string, category?: string) => {
        addSubCategory(name, status, category || "Uncategorized", image);
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
    };

    return (
            <section>
                {showPopup && (
                    <PopupNew
                    onClose={() => setShowPopup(false)}
                    onCreate={handleCreateSubCategory}
                    title="Create New Sub-Category"
                    nameLabel="Sub-Category Name"
                    placeholder="Enter sub-category name"
                    showColorPicker={false}
                    showImageUpload={true}
                    categories={categories}
                />
                )}
                <div className="next-text">
                    <h2 className="page-label">Manage Sub-Categories</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon">
                            <HiMiniPlusCircle />
                        </span>
                        <span className="new-text">Add Sub-Category</span>
                    </button>
                </div>
                <div className="brand-list">
                    <div className="title-brands">
                        <TbCategory2 />
                        <h3>Sub-Category List</h3>
                    </div>
                    <div className="brand-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sub-Category ID</th>
                                    <th>Thumbnail</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentSubCategories.map(subCategory => (
                                    <tr key={subCategory.id}>
                                        <td>{subCategory.id}</td>
                                        <td>
                                            {subCategory.image ? (
                                                <img src={subCategory.image} alt={subCategory.name} width="70" />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td>
                                            <span className="subCat-category">
                                                {subCategory.category}
                                            </span>
                                        </td>
                                        <td>{subCategory.name}</td>
                                        <td>
                                            <label className="toggle-switch">
                                                <input 
                                                    type="checkbox"
                                                    checked={subCategory.status}
                                                    onChange={() => toggleStatus(subCategory.id)}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </td>
                                        <td>
                                            <span className="action-icon">
                                                <MdEdit size={iconSize} />
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
