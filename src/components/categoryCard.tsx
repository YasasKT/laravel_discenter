import Image from 'next/image';
import { Category } from '../types/category';
import '../css/CategoriesHome.css';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="category-card">
      <Image src={category.image} alt={category.name} />
      <div className="text-container">
        <h3>{category.name}</h3>
        <p>{category.count} items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
