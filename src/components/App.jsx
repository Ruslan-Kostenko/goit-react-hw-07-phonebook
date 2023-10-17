import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledPhoneBook } from './PhoneBook/PhoneBook.styled';
import { GlobalStyle } from './GlobalStyle';
import { getContacts } from 'store/PhoneBook/phoneBookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/PhoneBook/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
