import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import styles from './login-page.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Log In</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
