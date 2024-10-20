"use client"
import { useState } from 'react';
import { CgNotes } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import "@/css/OrdersAdmin.css";

interface Order {
    id: number;
    date: string;
    customer: string;
    amount: string;
    paymentMethod: string;
    status: string;
}

export default function Orders() {
    const orders: Order[] = [
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
        { id: 1001, date: "2024/10/19", customer: "Demo User", amount: "LKR 4000.00", paymentMethod: "Cash Payment", status: "Pending"},
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const currentOrders = orders.slice(
        (currentPage -1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <section>
            <div className="title-orders">
                <div className="title-heading">
                <h1>Order Management</h1>
                <div className="title-separator"></div>
                </div>
                
                <h2>All Orders</h2>
            </div>
            <div className="orderAdmin-summary">
                <div className="title-orderSum">
                    <CgNotes />
                    <h3>Orders Summary</h3>
                </div>
                <div className="orderSum-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Total Amount</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>#{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.customer}</td>
                                    <td>
                                        <div className='amount-status'>
                                            <span>{order.amount}</span>
                                            <span className='order-status'>{order.status}</span>
                                        </div>
                                    </td>
                                    <td>{order.paymentMethod}</td>
                                    <td className='status-text'>{order.status}</td>
                                    <td>
                                        <button className='action-view'>
                                            <FaEye />
                                        </button>
                                        <button className='action-download'>
                                            <HiDownload />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='pagination'>
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
                        {index +1}
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