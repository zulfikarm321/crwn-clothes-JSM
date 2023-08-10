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
            <h2>{title}</h2>
            <p>Shop Now</p>
         </div>
      </div>
   );
}

export default CategoryItem;
