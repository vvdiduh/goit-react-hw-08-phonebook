import { useEffect } from 'react';

import styles from './contacts-page.module.css';
import Form from '../../components/Form/Form.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import Filter from '../../components/Filter/Filter.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../redux/contacts/contacts-operations';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const onDeleteContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={onAddContact} />

      <div className={styles.wrap}>
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChange={handleChangeFilter} filter={filter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={onDeleteContact}
        />
      </div>
    </div>
  );
};
export default ContactsPage;
