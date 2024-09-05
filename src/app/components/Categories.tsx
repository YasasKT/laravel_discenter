// components/Categories.tsx
import { categories } from '../data/categories';
import CategoryCard from './categoryCard';
import { Category } from '../types/category';
import '../css/CategoriesHome.css';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="category-container">
        {categories.map((category: Category, index: number) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
      