// components/Categories.tsx
import { categories } from '@/app/data/categories';
import CategoryCard from './categoryCard';
import { Category } from '@/app/types/category';
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
      