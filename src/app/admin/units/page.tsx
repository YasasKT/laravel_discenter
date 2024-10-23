"use client";
import PopupNew from "@/components/PopupAddNew";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { TbBrandUnity } from "react-icons/tb";
import '@/css/BrandAdmin.css';
import { HiMiniPlusCircle } from "react-icons/hi2";

interface Unit {
    id: number;
    name: string;
    status: boolean;
};

export default function Units() {
    const [units, setUnits] = useState<Unit[]>([
        {id: 1, name: "UK", status: true},
        {id: 1, name: "UK", status: true},
        {id: 1, name: "UK", status: true},
        {id: 1, name: "UK", status: true},
        {id: 1, name: "UK", status: true},
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const addUnit = (name: string, status: boolean) => {
        const newUnit: Unit = {
            id: units.length + 1,
            name,
            status
        };
        setUnits(prevUnits => [...prevUnits, newUnit]);
        setShowPopup(false)
    };

    const handleCreateNew = () => {
        setShowPopup(true);
    };

    const toggleStatus = (id: number) => {
        setUnits(prevUnits => 
            prevUnits.map(unit => 
                unit.id === id ? { ...unit, status: !unit.status } :unit
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

    const totalPages = Math.ceil(units.length / itemsPerPage);

    const currentBrands = units.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleCreateUnit = (name: string, color: string, status: boolean, image?: string) => {
        console.log("Created Unit:", { name, color, status, image });
    };

    const onButtonClick = () => {
        setShowPopup(!showPopup);
    };

    return (
            <section>
                {showPopup && (
                    <PopupNew
                        onClose={() => setShowPopup(false)}
                        onCreate={handleCreateUnit}
                        title="Create New Unit"
                        nameLabel="Unit Name"
                        placeholder="Enter unit name"
                        showColorPicker={false}
                    />
                )}
                <div className="next-text">
                    <h2 className="page-label">Manage Units</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon">
                            <HiMiniPlusCircle />
                        </span>
                        <span className="new-text">Add Unit</span>
                    </button>
                </div>
                <div className="brand-list">
                    <div className="title-brands">
                        <TbBrandUnity />
                        <h3>Unit List</h3>
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
                                {units.map(unit => (
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