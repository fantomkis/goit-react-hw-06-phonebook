import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContacts,
} from '../../redux/contacts/contactsActions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
