import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.scss';
import { useNavigate } from 'react-router-dom';

function CartDropdown(props) {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
