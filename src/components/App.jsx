import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledPhoneBook } from './PhoneBook/PhoneBook.styled';
import { GlobalStyle } from './GlobalStyle';
import { getContacts } from 'store/PhoneBook/phoneBookSlice';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <StyledPhoneBook>
      <h1>Phonebook</h1>
      <PhoneBook />

      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <GlobalStyle />
    </StyledPhoneBook>
  );
};
