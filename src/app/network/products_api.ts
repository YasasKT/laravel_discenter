import { resolve } from "path";
import { Product } from "../models/product";

export const products: Product[] = [
    {
        id: 2001,
        name: "Laptop x300",
        model: "x300-2023",
        description: "High-performance laptop with 16GB RAM and 1TB SSD.",
        point_desc: "Perfect for professionals and gamers.",
        old_price: 1200,
        price: 999,
        image_01: "laptop_x300_front.jpg",
        image_02: "laptop_x300_side.jpg",
        image_03: "laptop_x300_back.jpg",
        category: "Laptops",
        sub_category: "Gaming laptops",
        availability: "In Stock",
        featured: true,
    },
    {
        id: 2002,
        name: "Smartphone Pro Max",
        model: "ProMax-5G",
        description: "Flagship smartphone with 5G support and 128GB storage.",
        point_desc: "Experience cutting-edge technology on the go.",
        old_price: 899,
        price: 799,
        image_01: "smartphone_promax_front.jpg",
        image_02: "smartphone_promax_side.jpg",
        image_03: "smartphone_promax_back.jpg",
        category: "Smartphones",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: true,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
    {
        id: 2003,
        name: "Wireless Headphones",
        model: "WH-500",
        description: "Noise-cancelling headphones with 30 hour battery life.",
        point_desc: "Immerse yourself in pure sound quality.",
        old_price: 250,
        price: 199,
        image_01: "wireless_headphones_front.jpg",
        image_02: "Wireless_headphones_side.jpg",
        image_03: "Wireless_headphones_back.jpg",
        category: "Audio & Video",
        sub_category: "Flagships",
        availability: "In Stock",
        featured: false,
    },
];

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// Fetch product by Id
export const getProduct = async (id: number): Promise<Product | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === id);
            resolve(product || null);
        }, 1000);
    });
};

// Add a new product
export const addProduct = async (newProduct: Product): Promise<Product> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            products.push(newProduct);
            resolve(newProduct);
        }, 1000);
    });
};

// Update an existing product
export const updateProduct = async (
    id: number,
    updatedProduct: Partial<Product>
): Promise<Product | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productIndex = products.findIndex((product) => product.id === id);
            if (productIndex !== -1) {
                products[productIndex] = {
                    ...products[productIndex],
                    ...updatedProduct,
                };
                resolve(products[productIndex]);
            } else {
                resolve(null);
            }
        }, 1000);
    });
};

// Delete a product
export const deleteProduct = async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productIndex = products.findIndex((product) => product.id === id);
            if (productIndex !== -1) {
                products.splice(productIndex, 1);
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};