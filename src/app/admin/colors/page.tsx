"use client";
import React, { useEffect, useState } from "react";
import { TbPalette } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import PopupAddNew from "@/components/PopupAddNew";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { fetchColors, addColor, updateColor } from "@/app/network/color_api";

interface Color {
    id: number;
    name: string;
    hexCode: string;
    status: boolean;
}

export default function Colors() {
    const [colors, setColors] = useState<Color[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editColor, setEditColor] = useState<Color | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const loadColors = async () => {
            try {
                const data = await fetchColors();
                setColors(data);
            } catch (error) {
                console.error("Error fetching colors:", error);
            }
        };

        loadColors();
    }, []);

    const handleCreateColor = async (
        name: string,
        hexCode: string,
        status: boolean
    ) => {
        const newColor: Color = { id: colors.length + 1, name, hexCode, status };
        try {
            const addedColor = await addColor(newColor);
            setColors((prevColors) => [...prevColors, addedColor]);
            setShowPopup(false);
        } catch (error) {
            console.error("Error adding color:", error);
        }
    };

    const handleEditColor = async (id: number, name: string, hexCode: string, status: boolean) => {
        try {
            const updatedColor = await updateColor(id, { name, hexCode, status });
            setColors((prevColors) => 
                prevColors.map((color) => 
                    color.id === id ? { ...color, name, hexCode, status } : color
                )
            );
            setEditColor(null);
        } catch (error) {
            console.error("Error updating color:", error);
        }
    };

    const toggleStatus = async (id: number) => {
        const color = colors.find((c) => c.id === id);
        if (color) {
            try {
                const updatedColor = await updateColor(id, { status: !color.status });
                if (updatedColor) {
                    setColors((prevColors) => 
                        prevColors.map((c) => 
                            c.id === id ? { ...c, status: updatedColor.status } : c
                        )
                    );
                }
            } catch (error) {
                console.error("Error updating color:", error);
            }
        }
    };

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

    return (
        <section>
            {showPopup && (
                <PopupAddNew
                    onClose={() => setShowPopup(false)}
                    onCreate={(name, colorCode, status) => 
                        handleCreateColor(name, colorCode, status)
                    }
                    title="Create New Color"
                    nameLabel="Color Name"
                    placeholder="Enter color name"
                    showColorPicker={true}
                />
            )}
            {editColor && (
                <PopupAddNew
                    onClose={() => setEditColor(null)}
                    onCreate={(name, colorCode, status) => 
                        handleEditColor(editColor.id, name, colorCode, status)
                    }
                    title="Edit Color"
                    nameLabel="Edit Color Name"
                    placeholder="Update color name"
                    showColorPicker={true}
                    initialData={{
                        name: editColor.name,
                        color: editColor.hexCode,
                        status: editColor.status,
                    }}
                />
            )}
            <div className="next-text">
                <h2 className="page-label">Manage Colors</h2>
                <button className="create-new" onClick={() => setShowPopup(true)}>
                    <span className="new-icon">
                        <HiMiniPlusCircle />
                    </span>
                    <span className="new-text">Add Color</span>
                </button>
            </div>
            <div className="brand-list">
                <div className="title-brands">
                    <TbPalette />
                    <h3>Colors</h3>
                </div>
                <div className="brand-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Color ID</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentColors.map((color) => (
                                <tr key={color.id}>
                                    <td>{color.id}</td>
                                    <td>{color.name}</td>
                                    <td>
                                        <span
                                            className="color-preview"
                                            style={{ backgroundColor: color.hexCode }}
                                        ></span>
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
                                        <span className="action-icon" onClick={() => setEditColor(color)}>
                                            <MdEdit size={30} />
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
