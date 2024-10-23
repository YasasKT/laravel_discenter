"use client";
import PopupAddNew from "@/components/PopupAddNew";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { CgSize } from "react-icons/cg";
import '@/css/BrandAdmin.css';
import { HiMiniPlusCircle } from "react-icons/hi2";

interface Size {
    id: number;
    name: string;
    status: boolean;
}

export default function Sizes() {
    const [sizes, setSizes] = useState<Size[]>([
        { id: 1, name: "XL", status: true },
        { id: 1, name: "XL", status: true },
        { id: 1, name: "XL", status: true },
        { id: 1, name: "XL", status: true },
        { id: 1, name: "XL", status: true },
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const addUnit = (name: string, status: boolean) => {
        const newUnit: Size = {
            id: sizes.length + 1,
            name,
            status
        };
        setSizes(prevSizes => [...prevSizes, newUnit]);
        setShowPopup(false)
    };

    const handleCreateNew = () => {
        setShowPopup(true);
    };

    const toggleStatus = (id: number) => {
        setSizes(prevSizes => 
            prevSizes.map(size => 
                size.id === id ? { ...size, status: !size.status } :size
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

    const totalPages = Math.ceil(sizes.length / itemsPerPage);

    const currentBrands = sizes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateSize = (name: string, color: string, status: boolean, image?: string) => {
        console.log("Created Size:", { name, color, status, image });
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
    }

    return (
            <section>
                {showPopup && (
                    <PopupAddNew
                    onClose={() => setShowPopup(false)}
                    onCreate={handleCreateSize}
                    title="Create New Size"
                    nameLabel="Size Name"
                    placeholder="Enter size name"
                    showColorPicker={false}
                />
                )}
                <div className="next-text">
                    <h2 className="page-label">Manage Sizes</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon">
                            <HiMiniPlusCircle />
                        </span>
                        <span className="new-text">Add Size</span>
                    </button>
                </div>
                <div className="brand-list">
                    <div className="title-brands">
                        <CgSize />
                        <h3>Size List</h3>
                    </div>
                    <div className="brand-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Size ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizes.map(size => (
                                    <tr key={size.id}>
                                        <td>{size.id}</td>
                                        <td>{size.name}</td>
                                        <td>
                                            <label className="toggle-switch">
                                                <input 
                                                    type="checkbox"
                                                    checked={size.status}
                                                    onChange={() => toggleStatus(size.id)}
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
    )
}