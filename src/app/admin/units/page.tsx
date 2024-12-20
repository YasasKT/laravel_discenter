"use client";
import React, { useEffect, useState } from "react";
import { FaBalanceScale } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import PopupAddNew from "@/components/PopupAddNew";
import "@/css/BrandAdmin.css";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { fetchUnits, addUnit, updateUnit } from "@/app/network/unit_api";

interface Unit {
    id: number;
    name: string;
    status: boolean;
}

export default function Units() {
    const [units, setUnits] = useState<Unit[]>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [editUnit, setEditUnit] = useState<Unit | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const loadUnits = async () => {
            try {
                const data = await fetchUnits();
                setUnits(data);
            } catch (error) {
                console.error("Error fetching units:", error);
            }
        };

        loadUnits();
    }, []);

    const handleCreateUnit = async (
        name: string,
        status: boolean
    ) => {
        const newUnit: Unit = { id: units.length + 1, name,  status };
        try {
            const addedUnit = await addUnit(newUnit);
            setUnits((prevUnits) => [...prevUnits, addedUnit]);
            setShowPopup(false);
        } catch (error) {
            console.error("Error adding unit:", error);
        }
    };

    const handleEditUnit = async (id: number, name: string, status: boolean) => {
        try {
            const updatedUnit = await updateUnit(id, { name, status });
            setUnits((prevUnits) => 
                prevUnits.map((unit) => 
                    unit.id === id ? { ...unit, name, status } : unit
                )
            );
            setEditUnit(null);
        } catch (error) {
            console.error("Error updating unit:", error);
        }
    };

    const toggleStatus = async (id: number) => {
        const unit = units.find((u) => u.id === id);
        if (unit) {
            try {
                const updatedUnit = await updateUnit(id, { status: !unit.status });
                if (updatedUnit) {
                    setUnits((prevUnits) => 
                        prevUnits.map((u) => 
                            u.id === id ? { ...u, status: updatedUnit.status } : u
                        )
                    );
                }
            } catch (error) {
                console.error("Error updating unit:", error);
            }
        }
    };

    const totalPages = Math.ceil(units.length / itemsPerPage);
    const currentUnits = units.slice(
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
                    onCreate={(name, status) => 
                        handleCreateUnit(name, !status)
                    }
                    title="Create New Unit"
                    nameLabel="Unit Name"
                    placeholder="Enter unit name"
                    showColorPicker={false}
                />
            )}
            {editUnit && (
                <PopupAddNew
                    onClose={() => setEditUnit(null)}
                    onCreate={(name, status) => 
                        handleEditUnit(editUnit.id, name, !status)
                    }
                    title="Edit Unit"
                    nameLabel="Edit Unit Name"
                    placeholder="Update unit name"
                    showColorPicker={false}
                    initialData={{
                        name: editUnit.name,
                        status: editUnit.status,
                    }}
                />
            )}
            <div className="next-text">
                <h2 className="page-label">Manage Units</h2>
                <button className="create-new" onClick={() => setShowPopup(true)}>
                    <span className="new-icon">
                        <HiMiniPlusCircle />
                    </span>
                    <span className="new-text">Add Unit</span>
                </button>
            </div>
            <div className="brand-list">
                <div className="title-brands">
                    <FaBalanceScale />
                    <h3>Units</h3>
                </div>
                <div className="brand-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Unit ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUnits.map((unit) => (
                                <tr key={unit.id}>
                                    <td>{unit.id}</td>
                                    <td>{unit.name}</td>
                                    <td>
                                        <label className="toggle-switch">
                                            <input 
                                                type="checkbox"
                                                checked={unit.status}
                                                onChange={() => toggleStatus(unit.id)}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <span className="action-icon" onClick={() => setEditUnit(unit)}>
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
