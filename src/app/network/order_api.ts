import { Order } from "../models/order";

// In-memory data store
let orders: Order[] = [
  {
    id: 1,
    session_id: "sess_001",
    reference_no: "ORD123456",
    fname: "John",
    lname: "Doe",
    cnumber: "1234",
    number: "9876543210",
    numtype: "Mobile",
    arrival_date: new Date(),
    total_products: "3",
    total_price: 120,
    placed_on: "2024-09-10 14:30",
    payment_status: "Shipped",
    seen: true,
  },
  {
    id: 2,
    session_id: "sess_002",
    reference_no: "ORD123457",
    fname: "Jane",
    lname: "Smith",
    cnumber: "5678",
    number: "9876543211",
    numtype: "Mobile",
    arrival_date: new Date(),
    total_products: "2",
    total_price: 220,
    placed_on: "2024-09-11 16:20",
    payment_status: "Pending",
    seen: false,
  },
];

// Fetch all orders
export const fetchOrders = async (): Promise<Order[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...orders]), 500); // Simulate delay
  });
};

// Fetch a single order by ID
export const fetchOrderById = async (id: number): Promise<Order | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(orders.find((order) => order.id === id)), 500);
  });
};

// Create a new order
export const createOrder = async (order: Partial<Order>): Promise<Order> => {
  return new Promise((resolve) => {
    const newOrder: Order = {
      ...order,
      id: orders.length + 1,
      placed_on: new Date().toISOString(),
    } as Order;
    orders.push(newOrder);
    setTimeout(() => resolve(newOrder), 500);
  });
};

// Update an existing order
export const updateOrder = async (id: number, updates: Partial<Order>): Promise<Order | undefined> => {
  return new Promise((resolve) => {
    const index = orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      orders[index] = { ...orders[index], ...updates };
      setTimeout(() => resolve(orders[index]), 500);
    } else {
      setTimeout(() => resolve(undefined), 500);
    }
  });
};

// Delete an order
export const deleteOrder = async (id: number): Promise<Order | undefined> => {
  return new Promise((resolve) => {
    const index = orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      const [deletedOrder] = orders.splice(index, 1);
      setTimeout(() => resolve(deletedOrder), 500);
    } else {
      setTimeout(() => resolve(undefined), 500);
    }
  });
};
