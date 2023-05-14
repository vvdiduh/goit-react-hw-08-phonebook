import styles from './login-form.module.css';
import fields from './fields';
import initialState from './initialState';
import useForm from '../../shared/hooks/useForm';
import Button from '../../shared/component/Button/Button';
import TextField from '../../shared/component/TextField/TextField';
import usePassword from '../../shared/hooks/usePassword';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  const { showPassword, handleShowClick } = usePassword();

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <AiTwotoneMail className={styles.iconMail} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <FaLock className={styles.iconPass} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
          type={showPassword ? 'text' : 'password'}
        />
        <Button>Log in</Button>
      </form>
      <button onClick={handleShowClick} className={styles.btn}>
        {showPassword ? 'hide' : 'show'}
      </button>
      <p className={styles.text}>
        New to us?{' '}
        <Link className={styles.link} to="/register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
