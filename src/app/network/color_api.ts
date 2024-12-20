import { Color } from "../models/color";

export const colors: Color[] = [
    {
        id: 1,
        name: "Red",
        hexCode: "#FF0000",
        status: true,
    },
    {
        id: 2,
        name: "Blue",
        hexCode: "#0000FF",
        status: false,
    },
    {
        id: 3,
        name: "Green",
        hexCode: "#008000",
        status: true,
    },
];

// Fetch all colors
export const fetchColors = async (): Promise<Color[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(colors);
        }, 1000);
    });
};

// Fetch color by Id
export const getColor = async (id: number): Promise<Color | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const color = colors.find((color) => color.id === id);
            resolve(color || null);
        }, 1000);
    });
};

// Add a new color
export const addColor = async (newColor: Color): Promise<Color> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            colors.push(newColor);
            resolve(newColor);
        }, 1000);
    });
};

// Update a color
export const updateColor = async (
    id: number,
    updatedColor: Partial<Color>
) : Promise<Color | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                const colorIndex = colors.findIndex((color) => color.id === id);
                if (colorIndex !== -1) {
                    colors[colorIndex] = { ...colors[colorIndex], ...updatedColor };
                    resolve(colors[colorIndex]);
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    });
};

// Delete a color
export const deleteColor = async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const colorIndex = colors.findIndex((color) => color.id === id);
            if (colorIndex !== -1) {
                colors.splice(colorIndex, 1);
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};