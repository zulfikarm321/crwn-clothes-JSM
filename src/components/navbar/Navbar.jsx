import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CrwnLogo from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';

import './navbar.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

function Navbar(props) {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <nav>
      <Link className="logo" to="/">
        <img src={CrwnLogo} alt="crown logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutHandler}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
}

export default Navbar;
