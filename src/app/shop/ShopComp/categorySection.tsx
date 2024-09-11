import React from 'react';
import Image from 'next/image';
import TVImage from '../../img/led-television-icon.png';
import '../../css/CategorySection.css';

interface Category {
    id: number;
    name: string;
    icon: string;
    itemCount: number;
}

const categories: Category[] = [
    { id: 1, name: 'TV', icon: TVImage.src, itemCount: 4 },
    { id: 2, name: 'Refrigerator', icon: TVImage.src, itemCount: 19 },
    { id: 3, name: 'Home Appliances', icon: TVImage.src, itemCount: 3 },
    { id: 4, name: 'Washing Machine', icon: TVImage.src, itemCount: 0 },
    { id: 5, name: 'Kitchen Appliances', icon: TVImage.src, itemCount: 4 },
    { id: 6, name: 'Audio & Video', icon: TVImage.src, itemCount: 0 },
];

const CategorySeparator: React.FC = () => {
    return (
        <div className="category-separator">
            {categories.map((category) => (
                <a key={category.id} href={`/category/${encodeURIComponent(category.name)}`} className="category-card">
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
