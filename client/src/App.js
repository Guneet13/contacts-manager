import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  //passing data to another component(rendering list)
  /*const contacts = [
    {
      id: "1",
      "name": "Olivia R",
      "email": "or@gmail.com",
    },
    {
      id: "2",
      "name": "Sophia M",
      "email": "sm@gmail.com",
    }
  ];*/

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
