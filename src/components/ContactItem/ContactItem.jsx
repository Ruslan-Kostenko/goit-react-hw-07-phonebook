import { useDispatch } from 'react-redux';
import { ContItemEl, ContactBtn } from './ContactItem.styled';
import { fetchDeleteContact } from 'store/PhoneBook/operations';


export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContItemEl>
      <div>{name}: {number}</div>
      <ContactBtn
        onClick={() => dispatch(fetchDeleteContact(id))}
        value={id}
        type="button"
      >
        Delete
      </ContactBtn>
    </ContItemEl>
  );
};
