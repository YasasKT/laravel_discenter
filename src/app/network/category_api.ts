import { Category, SubCategory } from "../models/category";
import TVImage from '../../img/led-television-icon.png';

const categories: Category[] = [
    {
        id: 1,
        parent_id: 1,
        name: "Electronics",
        icon: TVImage.src,
        itemCount: 12,
    },
    {
        id: 1,
        parent_id: 1,
        name: "Kitchen Appliances",
        icon: TVImage.src,
        itemCount: 4,
    },
];

const subCategories: SubCategory[] = [
    {
        id: 1,
        parent_id: 1,
        name: "Smartphones",
        icon: TVImage.src,
        itemCount:20,
    },
    {
        id: 2,
        parent_id: 1,
        name: "Laptops",
        icon: TVImage.src,
        itemCount: 19,
    },
];

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        }, 1000);
    });
};

// Fetch a category by ID
export const getCategory = async (id: number): Promise<Category | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const category = categories.find((cat) => cat.id === id);
            resolve(category || null);
        }, 1000);
    });
};

// Fetch sub-categories by category ID
export const fetchSubCategories = async (categoryId: number): Promise<SubCategory[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredSubCategories = subCategories.filter((sub) => sub.parent_id === categoryId);
            console.log("Category ID:", categoryId);
            console.log("Filtered Subcategories:", filteredSubCategories);
            resolve(filteredSubCategories);
        }, 1000);
    });
};


// Fetch a specific sub-category by ID
export const getSubCategory = async (id: number): Promise<SubCategory | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const SubCategory = subCategories.find((sub) => sub.id === id);
            resolve(SubCategory || null);
        }, 1000);
    });
};