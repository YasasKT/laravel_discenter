import { Unit } from "../models/unit";

export const units: Unit[] = [
    {
        id: 1,
        name: "UK",
        status: true,
    },
    {
        id: 2,
        name: "US",
        status: true,
    },
    {
        id: 3,
        name: "EU",
        status: false,
    },
];

// Fetch all units
export const fetchUnits = async (): Promise<Unit[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(units);
        }, 1000);
    });
};

// Fetch unit by Id
export const getUnit = async (id: number): Promise<Unit | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const unit = units.find((unit) => unit.id === id);
            resolve(unit || null);
        }, 1000);
    });
};

// Add a new unit
export const addUnit = async (newUnit: Unit): Promise<Unit> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            units.push(newUnit);
            resolve(newUnit);
        }, 1000);
    });
};

// Update an unit
export const updateUnit = async (
    id: number,
    updatedUnit: Partial<Unit>
) : Promise<Unit | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const unitIndex = units.findIndex((unit) => unit.id === id);
            if (unitIndex !== -1) {
                units[unitIndex] = { ...units[unitIndex], ...updatedUnit };
                resolve(units[unitIndex]);
            } else {
                resolve(null);
            }
        }, 1000);
    });
};

// Delete a unit
export const deleteUnit = async (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const unitIndex = units.findIndex((unit) => unit.id === id);
            if (unitIndex !== -1) {
                units.splice(unitIndex, 1);
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};