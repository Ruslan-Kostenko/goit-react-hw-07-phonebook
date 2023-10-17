import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast';
import { fetchAddContact, fetchContacts, fetchDeleteContact } from './operations';

const toastLoading = toast.loading('', { position: 'top-right' });

const onPending = state => {
  state.isLoading = true;
  toast.loading('Waiting...',{  id: toastLoading,
    position: 'top-center' });
};


const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.dismiss(toastLoading);
  toast.error(state.error);
};


const onFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  state.isLoading = false;
  state.items = action.payload;
  state.erorr = null;
};


const onAddFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact is added!')
  return { ...state, items: [...state.items, action.payload] };
};


const onDeleteFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact deleted');
  return {
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload.id),
  };
};



export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers:builder=>{
    builder
      .addCase(fetchContacts.pending,onPending)
      .addCase(fetchContacts.fulfilled,onFulfilled)
      .addCase(fetchContacts.rejected,onRejected)
      .addCase(fetchAddContact.pending,onPending)
      .addCase(fetchAddContact.fulfilled,onAddFulfilled)
      .addCase(fetchAddContact.rejected,onRejected)
      .addCase(fetchDeleteContact.pending,onPending)
      .addCase(fetchDeleteContact.fulfilled,onDeleteFulfilled)
      .addCase(fetchDeleteContact.rejected,onRejected)
  }
});

export const getContacts = state => state.contacts.items;

export const { addContact, deleteContact } = phoneBookSlice.actions;
