import { useSelector } from 'react-redux';
import { getFilter } from 'store/PhoneBook/filterSlice';
import { getContacts } from 'store/PhoneBook/phoneBookSlice';
import { ContactItem } from '../ContactItem/ContactItem';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = getFiltered();

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.phone}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
