import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export function App() {
  const [contacts, setcCntacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = JSON.stringify(contacts);
    localStorage.setItem('contacts', data);
  }, [contacts]);

  // componentDidMount() {
  //   const date = ;
  //   console.log(date);
  //   const parseData = (date);

  //   if (parseData) {
  //     return this.setState({ contacts: [...parseData] });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts !== contacts) {
  //     const data = JSON.stringify(contacts);
  //     localStorage.setItem("contacts", data);
  //   }
  // }
  const onAddContact = (name, number) => {
    const repeatOfNames = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatOfNames) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    setcCntacts(prev => [
      ...prev,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const filterChang = e => {
    setFilter(e.target.value);
  };
  const onFilterContacts = () => {
    const filterContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  const onDeleteContact = id => {
    setcCntacts(prev => prev.filter(el => el.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} filterChang={filterChang} />
      <ContactList
        contacts={onFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
