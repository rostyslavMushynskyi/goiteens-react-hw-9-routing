import { NavLink } from 'react-router-dom';
import styles from './CustomNavLink.module.css';

function CustomNavLink({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
      {children}
    </NavLink>
  );
}
export default CustomNavLink;
