import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Movie Hub
      </NavLink>

      <nav className={styles.nav}>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/movies">Movies</CustomNavLink>
      </nav>
    </header>
  );
}
export default Header;
