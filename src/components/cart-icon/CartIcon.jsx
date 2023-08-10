import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

function CartIcon(props) {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img src={ShoppingIcon} alt="shopping icon" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
