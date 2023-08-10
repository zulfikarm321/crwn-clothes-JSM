import CategoryItem from '../category-item/CategoryItem';
import './category-list.scss';

function CategoryList({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
