import NavbarAuth from './NavbarAuth/NavbarAuth';
import { isUserLogin } from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {!isLogin && <NavbarAuth />}
          {isLogin && <UserMenu />}
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
