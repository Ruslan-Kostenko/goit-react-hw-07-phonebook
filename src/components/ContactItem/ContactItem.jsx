import { useDispatch } from 'react-redux';
import { ContItemEl, ContactBtn } from './ContactItem.styled';
import { deleteContact } from 'store/PhoneBook/phoneBookSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContItemEl>
      <div>{name}: {number}</div>
      <ContactBtn
        onClick={() => dispatch(deleteContact(id))}
        value={id}
        type="button"
      >
        Delete
      </ContactBtn>
    </ContItemEl>
  );
};
