import React from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  //passing data to another component(rendering list)
  const contacts = [
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
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
