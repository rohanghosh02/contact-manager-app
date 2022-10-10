import React, { useState, useEffect } from "react";
import "../Styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const getItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

  const [contacts, setContacts] = useState(getItems);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]); //need to change
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }

            // render={(props) => (
            //   <ContactList
            //     {...props}
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />
            // )}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            // render={(props) => (
            //   <AddContact {...props} addContactHandler={addContactHandler} />
            // )}
          />

          <Route
            path="/contact/:id"
            element={<ContactDetail contact={contacts} />}
          ></Route>
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
