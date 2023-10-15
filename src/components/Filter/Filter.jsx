import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from './Filter.styled';
import { changeFilter, getFilter } from 'store/PhoneBook/filterSlice';

export const Filter = () => {
const phoneFilter = useSelector(getFilter);
const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <FilterInput
          value={phoneFilter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};
