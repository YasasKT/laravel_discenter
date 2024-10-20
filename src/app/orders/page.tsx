"use client";
import React from "react";
import Hero from '../orders/ordersComp/orderHero';
import '@/css/Orders.css';

// Sample Data for Orders
const orders = [
  {
    orderNumber: "ORD123456",
    dateTime: "2024-09-10 14:30",
    items: ["Item 1", "Item 2", "Item 3"],
    billingAddress: "123 Main St, New York, NY",
    status: "Shipped",
    amount: "$120.00",
  },
  {
    orderNumber: "ORD123457",
    dateTime: "2024-09-11 16:20",
    items: ["Item 4", "Item 5"],
    billingAddress: "456 Oak St, Los Angeles, CA",
    status: "Pending",
    amount: "$220.00",
  },
  {
    orderNumber: "ORD123457",
    dateTime: "2024-09-11 16:20",
    items: ["Item 4", "Item 5"],
    billingAddress: "456 Oak St, Los Angeles, CA",
    status: "Delivered",
    amount: "$220.00",
  },
  // Add more orders as needed
];

const OrdersPage: React.FC = () => {
  // Define the type of the 'status' parameter explicitly
  const getStatusClass = (status: string): string => {
    switch (status.toLowerCase()) {
      case "shipped":
        return "status-shipped";
      case "pending":
        return "status-pending";
      case "delivered":
        return "status-delivered";
      default:
        return "";
    }
  };

  return (
    <div>
      <Hero />
      <div className="orders-page">
        {/* Order Detail Labels */}
        <div className="order-labels">
          <span>Order Number</span>
          <span>Date & Time</span>
          <span>Items</span>
          <span>Billing Address</span>
          <span>Status</span>
          <span>Amount</span>
        </div>

        {/* Order Cards */}
        <div className="order-cards-container">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <span className="order-detail">{order.orderNumber}</span>
              <span className="order-detail">{order.dateTime}</span>
              <span className="order-detail">{order.items.join(", ")}</span>
              <span className="order-detail">{order.billingAddress}</span>
              {/* Apply status color dynamically */}
              <span className={`order-detail ${getStatusClass(order.status)}`}>
                {order.status}
              </span>
              <span className="order-detail">{order.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
