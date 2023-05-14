import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from '../TextField/text-field.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <input
      className={styles.field}
      id={id}
      onChange={handleChange}
      {...props}
    />
  );
};

export default TextField;
