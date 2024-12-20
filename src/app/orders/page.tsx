"use client";
import React, { useState, useEffect } from "react";
import Hero from '../orders/ordersComp/orderHero';
import '@/css/Orders.css';
import { Order } from "../models/order";
import { deleteOrder, fetchOrders } from "../network/order_api";

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (err) {
        setError("Failed to load orders");
      }
    };
    loadOrders();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteOrder(id);
      setOrders(orders.filter((order) => order.id !== id));
    } catch {
      setError("failed to delete order");
    }
  };

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
        {error && <p className="error-message">{error}</p>}
        <div className="order-labels">
          <span>Order Number</span>
          <span>Date & Time</span>
          <span>Items</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Order Cards */}
        <div className="order-cards-container">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <span className="order-detail">{order.reference_no}</span>
              <span className="order-detail">{order.placed_on}</span>
              <span className="order-detail">{order.total_products}</span>
              <span className="order-detail">${order.total_price}</span>
              {/* Apply status color dynamically */}
              <span className={`order-detail ${getStatusClass(order.payment_status)}`}>
                {order.payment_status}
              </span>
              <button className="delete-btn" onClick={() => handleDelete(order.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
