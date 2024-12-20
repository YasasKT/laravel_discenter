import { Size } from "../models/size";

export const sizes: Size[] = [
    {
        id: 1,
        name: "Small",
        status: true,
    },
    {
        id: 2, 
        name: "Medium",
        status: false,
    },
    {
        id: 3, 
        name: "Large",
        status: true,
    },
];

// Fetch all sizes
export const fetchSizes = async (): Promise<Size[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sizes);
        }, 1000);
    });
};

// Fetch size by Id
export const getSize = async (id: number): Promise<Size | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const size = sizes.find((size) => size.id === id);
            resolve(size || null);
        }, 1000);
    });
};

// Add a new size
export const addSize = async (newSize: Size): Promise<Size> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            sizes.push(newSize);
            resolve(newSize);
        }, 1000);
    });
};

// Update an size
export const updateSize = async (
    id: number,
    updatedSize: Partial<Size>
) : Promise<Size | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sizeIndex = sizes.findIndex((size) => size.id === id);
            if (sizeIndex !== -1) {
                sizes[sizeIndex] = { ...sizes[sizeIndex], ...updatedSize };
                resolve(sizes[sizeIndex]);
            } else {
                resolve(null);
            }
        }, 1000);
    });
};

// Delete a size
export const deleteSize = async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sizeIndex = sizes.findIndex((size) => size.id === id);
            if (sizeIndex !== -1) {
                sizes.splice(sizeIndex, 1);
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};