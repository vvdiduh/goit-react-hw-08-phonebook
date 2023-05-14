import styles from './registration-form.module.css';
import initialState from './initialState';
import fields from './fields';
import Button from '../../shared/component/Button/Button';
import TextField from '../../shared/component/TextField/TextField';
import useForm from '../../shared/hooks/useForm';
import usePassword from '../../shared/hooks/usePassword';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';

const RegistrationForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  const { showPassword, handleShowClick } = usePassword();
  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FaUserAlt className={styles.iconUser} />
        <TextField
          value={name}
          onChange={handleChange}
          {...fields.name}
        ></TextField>
        <AiTwotoneMail className={styles.iconMail} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <FaLock className={styles.iconPass} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
          type={showPassword ? 'text' : 'password'}
        ></TextField>

        <Button>Sign up</Button>
      </form>
      <button onClick={handleShowClick} className={styles.btn}>
        {showPassword ? 'hide' : 'show'}
      </button>
      <p className={styles.text}>
        Already have an account?{' '}
        <Link className={styles.link} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
