import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import s from './ContactList.module.css';

function ContactList() {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.title}>
              {name}:<span className="">{number}</span>
            </p>

            <button
              className={s.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
