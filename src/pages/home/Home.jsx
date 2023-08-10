import CategoryList from '../../components/category-list/CategoryList';
import CATEGORY_LIST from '../../data/category-list.json';

function Home() {
  return (
    <div>
      <CategoryList categories={CATEGORY_LIST} />
    </div>
  );
}

export default Home;
