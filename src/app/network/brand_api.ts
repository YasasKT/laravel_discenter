import { Brand } from "../models/brand";

export const brands: Brand[] = [
    {
        id: 1,
        name: "Apple",
        status: true,
    },
    {
        id: 2,
        name: "Samsung",
        status: false,
    },
    {
        id: 3,
        name: "LG",
        status: true,
    },
];


// Fetch all brands 
export const fetchBrands = async (): Promise<Brand[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(brands);
        }, 1000);
    });
};

// Fetch brand by Id
export const getBrand = async (id: number): Promise<Brand | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const brand = brands.find((brand) => brand.id === id);
            resolve(brand || null);
        }, 1000);
    });
};

// Add a new brand
export const addBrand = async (newBrand: Brand): Promise<Brand> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            brands.push(newBrand);
            resolve(newBrand);
        }, 1000);
    });
};

// Update brand
export const updateBrand = async (
    id: number,
    updateBrand: Partial<Brand>
) : Promise<Brand | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const brandIndex = brands.findIndex((brand) => brand.id === id);
            if (brandIndex !== -1) {
                brands[brandIndex] = { ...brands[brandIndex], ...updateBrand };
                resolve(brands[brandIndex]);
            } else {
                resolve(null);
            }
        }, 1000);
    });
};

// Delete brand
export const deleteBrand = async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const brandIndex = brands.findIndex((brand) => brand.id === id);
            if (brandIndex !== -1) {
                brands.splice(brandIndex, 1);
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};