"use client";
import React, { useEffect, useState } from "react";
import { FaRuler } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import PopupAddNew from "@/components/PopupAddNew";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { fetchSizes, addSize, updateSize } from "@/app/network/size_api";

interface Size {
    id: number;
    name: string;
    status: boolean;
}

export default function Sizes() {
    const [sizes, setSizes] = useState<Size[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editSize, setEditSize] = useState<Size | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const loadSizes = async () => {
            try {
                const data = await fetchSizes();
                setSizes(data);
            } catch (error) {
                console.error("Error fetching sizes:", error);
            }
        };

        loadSizes();
    }, []);

    const handleCreateSize = async (name: string, status: boolean) => {
        const newSize: Size = { id: sizes.length + 1, name, status };
        try {
            const addedSize = await addSize(newSize);
            setSizes((prevSizes) => [...prevSizes, addedSize]);
            setShowPopup(false);
        } catch (error) {
            console.error("Error adding size:", error);
        }
    };

    const handleEditSize = async (id: number, name: string, status: boolean) => {
        try {
            const updatedSize = await updateSize(id, { name, status });
            setSizes((prevSizes) =>
                prevSizes.map((size) =>
                    size.id === id ? { ...size, name, status } : size
                )
            );
            setEditSize(null);
        } catch (error) {
            console.error("Error updating size:", error);
        }
    };

    const toggleStatus = async (id: number) => {
        const size = sizes.find((s) => s.id === id);
        if (size) {
            try {
                const updatedSize = await updateSize(id, { status: !size.status });
                if (updatedSize) {
                    setSizes((prevSizes) =>
                        prevSizes.map((s) =>
                            s.id === id ? { ...s, status: updatedSize.status } : s
                        )
                    );
                }
            } catch (error) {
                console.error("Error updating size:", error);
            }
        }
    };

    const totalPages = Math.ceil(sizes.length / itemsPerPage);
    const currentSizes = sizes.slice(
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
                    onCreate={(name, status) => handleCreateSize(name, !status)}
                    title="Create New Size"
                    nameLabel="Size Name"
                    placeholder="Enter size name"
                    showColorPicker={false}
                />
            )}
            {editSize && (
                <PopupAddNew
                    onClose={() => setEditSize(null)}
                    onCreate={(name, status) => handleEditSize(editSize.id, name, !status)}
                    title="Edit Size"
                    nameLabel="Edit Size Name"
                    placeholder="Update size name"
                    showColorPicker={false}
                    initialData={{
                        name: editSize.name,
                        status: editSize.status,
                    }}
                />
            )}
            <div className="next-text">
                <h2 className="page-label">Manage Sizes</h2>
                <button className="create-new" onClick={() => setShowPopup(true)}>
                    <span className="new-icon">
                        <HiMiniPlusCircle />
                    </span>
                    <span className="new-text">Add Size</span>
                </button>
            </div>
            <div className="brand-list">
                <div className="title-brands">
                    <FaRuler />
                    <h3>Sizes</h3>
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
                            {currentSizes.map((size) => (
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
                                        <span className="action-icon" onClick={() => setEditSize(size)}>
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
