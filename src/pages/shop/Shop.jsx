import { Routes, Route } from 'react-router-dom';

import './shop.scss';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import CategoryDetail from '../../components/category-detail/CategoryDetail';

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryDetail />} />
    </Routes>
  );
}

export default Shop;
