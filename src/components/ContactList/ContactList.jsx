import styles from './contact-list.module.css';
import propTypes from 'prop-types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(contact => (
    <li key={contact.id} id={contact.id} className={styles.item}>
      <span>
        <span className={styles.name}>{contact.name}</span>
        <span>{contact.number}</span>
      </span>
      <button className={styles.btn} onClick={() => deleteContact(contact.id)}>
        <DeleteOutlineIcon fontSize="medium" />
      </button>
    </li>
  ));
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.list}>{elements} </ul>
      ) : (
        <h2 className={styles.text}>
          Add some contacts <br /> Your phonebook is empty
        </h2>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};

export default ContactList;
