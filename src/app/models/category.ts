export interface Category {
    id: number;
    parent_id: number;
    name: string;
    icon: string;
    itemCount: number,
}

export interface SubCategory {
    id: number;
    parent_id: number;
    name: string;
    icon: string;
    itemCount: number,
}