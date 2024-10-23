"use client";
import PopupAddNew from "@/components/PopupAddNew";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";

interface Category {
    id: number;
    name: string;
    status: boolean;
    image?: string;
};
 
export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: "Electronics", status: true, image: "https://via.placeholder.com/100" },
        { id: 1, name: "Electronics", status: true, image: "https://via.placeholder.com/100"},
        { id: 1, name: "Electronics", status: true, image: "https://via.placeholder.com/100"},
        { id: 1, name: "Electronics", status: true, image: "https://via.placeholder.com/100"},
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const addCategory = (name: string, color: string, status: boolean, image?: string) => {
        const newCategory: Category = {
            id: categories.length + 1,
            name,
            status,
            image: image || "https://via.placeholder.com/100"
        };
        setCategories(prevCategories => [...prevCategories, newCategory]);
        setShowPopup(false);
    };

    const toggleStatus = (id: number) => {
        setCategories(prevCategories => 
            prevCategories.map(category => 
                category.id === id ? { ...category, status: !category.status } : category
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

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const currentCategories = categories.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateCategory = (name: string, color: string, status: boolean, image?: string) => {
        addCategory(name, color, status, image);
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
    };

    return (
            <section>
                {showPopup && (
                    <PopupAddNew
                    onClose={() => setShowPopup(false)}
                    onCreate={handleCreateCategory}
                    title="Create New Category"
                    nameLabel="Category Name"
                    placeholder="Enter category name"
                    showColorPicker={false}
                    showImageUpload={true}
                />
                )}
                <div className="next-text">
                    <h2 className="page-label">Manage Categories</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon">
                            <HiMiniPlusCircle />
                        </span>
                        <span className="new-text">Add Category</span>
                    </button>
                </div>
                <div className="brand-list">
                    <div className="title-brands">
                        <TbCategory2 />
                        <h3>Category List</h3>
                    </div>
                    <div className="brand-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Thumbnail</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCategories.map(category => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>
                                            {category.image ? (
                                                <img src={category.image} alt={category.name} width="70" />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td>{category.name}</td>
                                        <td>
                                            <label className="toggle-switch">
                                                <input 
                                                    type="checkbox"
                                                    checked={category.status}
                                                    onChange={() => toggleStatus(category.id)}
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