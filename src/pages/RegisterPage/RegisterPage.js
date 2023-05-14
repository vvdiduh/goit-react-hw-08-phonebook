import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import styles from './register-page.module.css';

import RegistrationForm from '../../components/RegistartionForm/RegistrationForm.jsx';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Sign Up</h1>
      <RegistrationForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
