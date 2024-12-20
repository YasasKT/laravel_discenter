import React from "react";
import Image from "next/image";
import TVImage from '../../../img/led-television-icon.png';
import '@/css/CategorySection.css';

interface SubCategory {
    id: number;
    parent_id: number;
    name: string;
    icon: string;
    itemCount: number;
}

interface SubCategorySectionProps {
    subcategories: SubCategory[];
}

const subcategories: SubCategory[] = [
    {id: 1, parent_id: 1, name: "Smartphones", icon: TVImage.src, itemCount: 5},
];

const SubCategorySection: React.FC<SubCategorySectionProps> = ({ subcategories }) => {
    return (
        <div className="category-separator">
            {subcategories.length > 0 ? (
                subcategories.map((subcategory) => (
                    <a 
                        key={subcategory.id}
                        href={`/subcategory/${encodeURIComponent(subcategory.name)}`}
                        className="category-card">
                            <div className="icon">
                                <Image
                                    src={subcategory.icon}
                                    alt={subcategory.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="category-desc">
                                <span className="category-name">{subcategory.name}</span>
                                <span className="item-qty">{subcategory.itemCount} items</span>
                            </div>
                        </a>
                ))
            ) : (
                <p className="no-categories">No subcategories available.</p>
            )}
        </div>
    );
};

export default SubCategorySection;