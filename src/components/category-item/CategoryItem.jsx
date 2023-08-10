import { Link } from 'react-router-dom';
import './category-item.scss';

function CategoryItem({ category }) {
  const { title, imageUrl } = category;

  return (
    <div className="category-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="category-item-body">
        <h2>
          <Link to={`/shop/${title}`}>{title}</Link>
        </h2>

        <p>
          <Link to={`/shop/${title}`}>Shop Now</Link>
        </p>
      </div>
    </div>
  );
}

export default CategoryItem;
