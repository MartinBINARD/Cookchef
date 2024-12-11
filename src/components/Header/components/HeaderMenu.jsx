import { NavLink, useLocation } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';

function HeaderMenu({ displayWishlist, hideMenu }) {
  const location = useLocation();

  return (
    <ul onClick={hideMenu} className={`${styles.MenuContainer} card p-20`}>
      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>
      {!location.pathname.includes('admin') && (
        <li onClick={displayWishlist}>Wishlist</li>
      )}
      {/* <li>Connexion</li> */}
    </ul>
  );
}

export default HeaderMenu;