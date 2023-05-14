// import styles from './user-menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';
import styles from './user-menu.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.text}>PHONEBOOK</p>
      <div className={styles.container}>
        <p className={styles.mail}>{email}</p>
        <button className={styles.btn} type="submit" onClick={onLogout}>
          Log out <LogoutIcon fontSize="small" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
