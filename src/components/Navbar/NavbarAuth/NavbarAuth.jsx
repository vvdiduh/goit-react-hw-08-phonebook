import { NavLink } from 'react-router-dom';
import styles from './navbar-auth.module.css';
import { Home } from '@mui/icons-material';

const NavbarAuth = () => {
  // const getFullName = ({ isActive }) => {
  //   return isActive ? `${styles.link} ${styles.active}` : styles.link;
  // };
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.linkHome}>
        <Home className={styles.icon} />
        Home
      </NavLink>
      <div>
        <NavLink to="/register" className={styles.link}>
          Sign Up
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarAuth;
