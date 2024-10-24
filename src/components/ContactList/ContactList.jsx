import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={style.contactList}>
      {filteredContacts.length === 0 ? (
        <p className={style.noContacts}>No contacts</p>
      ) : (
        filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
