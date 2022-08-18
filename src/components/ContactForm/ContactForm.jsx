import { useState } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'number' && setNumber(input.value);
  };

  const atSubmit = e => {
    e.preventDefault();

    onAddContact(name, number);
  };

  return (
    <form onSubmit={atSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          onChange={handelChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          onChange={handelChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};

export default ContactForm;
