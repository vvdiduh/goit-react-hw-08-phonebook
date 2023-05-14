import styles from './filter.module.css';
import propTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>Find contacts by name:</span>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Filter;
