"use client";
import TopSection from "@/components/AdminTopSection";
import PopupAddNew from "@/components/PopupAddNew";
import { use, useEffect, useState } from "react";
import { IoMdColorFill } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";

interface Color {
    id: number;
    name: string;
    color: string;
    status: boolean;
};

export default function Colors() {
    const [colors, setColors] = useState<Color[]>([
        {id: 1, name: "Red", color: "#ff0000", status: true},
        {id: 1, name: "Red", color: "#0000ff", status: true},
        {id: 1, name: "Red", color: "#008000", status: true},
        {id: 1, name: "Red", color: "#ffff00", status: true},
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const addColor = (name: string, status: boolean) => {
        const color = "#ff0000";
        const newColor: Color = {
            id: colors.length + 1,
            name,
            color,
            status
        };
        setColors(prevColors => [...prevColors, newColor]);
        setShowPopup(false);
    }
    const handleCreateNew = () => {
        setShowPopup(true);
    };

    const toggleStatus = (id: number) => {
        setColors(prevColors => 
            prevColors.map(color => 
                color.id === id ? { ...color, status: !color.status } :color
            )
        );
    };

    const updateColor = (id: number, newColor: string) => {
        setColors(prevColors => 
            prevColors.map(color => 
                color.id === id ? { ...color, status: !color.status } : color
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

    const totalPages = Math.ceil(colors.length / itemsPerPage);

    const currentColors = colors.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateColor = (name: string, color: string, status: boolean, image?: string) => {
        console.log("Created color:", { name, status, color });
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <section>
                {showPopup && (
                    <PopupAddNew
                        onClose={() => setShowPopup(false)}
                        onCreate={handleCreateColor}
                        title="Create New Color"
                        nameLabel="Color Name"
                        placeholder="Enter color name"
                        showColorPicker={true}
                    />
                )}
                <div className="next-text">
                    <h2 className="page-label">Manage Colors</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon">
                            <HiMiniPlusCircle />
                        </span>
                        <span className="new-text">Add Color</span>
                    </button>
                </div>
                <div className="brand-list">
                    <div className="title-brands">
                        <IoMdColorFill />
                        <h3>Colors</h3>
                    </div>
                    <div className="brand-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Brand ID</th>
                                    <th>Name</th>
                                    <th>Color</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {colors.map(color => (
                                    <tr key={color.id}>
                                        <td>{color.id}</td>
                                        <td>{color.name}</td>
                                        <td>
                                            <input 
                                                type="color"
                                                value={color.color}
                                                onChange={(e) => updateColor(color.id, e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <label className="toggle-switch">
                                                <input 
                                                    type="checkbox"
                                                    checked={color.status}
                                                    onChange={() => toggleStatus(color.id)}
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
        </div>
    );
}