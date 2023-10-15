import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';


export const phoneBookSlice = createSlice({
    name: 'contacts',
    initialState: {items :[]},
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload)
        },
        deleteContact:(state, action) => {
            state.items=state.items.filter(contact=> contact.id !== action.payload)
        }
    },
});

export const getContacts = state =>state.contacts.items;

export const persistConfig = {
    key: 'root',
    storage,
    whitelist:['items'],
  };
 export const persistedContactsReducer = persistReducer(
    persistConfig,
    phoneBookSlice.reducer
  );

export const {addContact, deleteContact} = phoneBookSlice.actions;