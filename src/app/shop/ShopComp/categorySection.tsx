import React from 'react';
import Image from 'next/image';
import TVImage from '../../../img/led-television-icon.png';
import '@/css/CategorySection.css';

interface Category {
    id: number;
    parent_id: number;
    name: string;
    icon: string;
    itemCount: number,
}

interface CategorySeparatorProps {
    onCategorySelect: (category: Category) => Promise<void>;
}

const categories: Category[] = [
    { id: 1, parent_id: 1, name: 'Electronics', icon: TVImage.src, itemCount: 4 },
    { id: 2, parent_id: 1, name: 'Clothing', icon: TVImage.src, itemCount: 19 },
    { id: 3, parent_id: 1, name: 'Home Appliances', icon: TVImage.src, itemCount: 3 },
    { id: 4, parent_id: 1, name: 'Beauty & Kids', icon: TVImage.src, itemCount: 0 },
    { id: 5, parent_id: 1, name: 'Kitchen Appliances', icon: TVImage.src, itemCount: 4 },
    { id: 6, parent_id: 1, name: 'Audio & Video', icon: TVImage.src, itemCount: 0 },
];

const CategorySeparator: React.FC<CategorySeparatorProps> = ({ onCategorySelect }) => {
    return (
        <div className="category-separator">
            {categories.map((category) => (
                <a key={category.id} onClick={() => onCategorySelect(category)} className="category-card">
                    <div className="icon">
                        <Image src={category.icon} alt={category.name} width={50} height={50} />
                    </div>
                    <div className="category-desc">
                        <span className="category-name">{category.name}</span>
                        <span className="item-qty">{category.itemCount} items</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default CategorySeparator;
