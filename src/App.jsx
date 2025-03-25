import React, { useState, useEffect } from 'react';


import { Routes, Route, Navigate } from "react-router-dom";

import AddContact2 from './AddContact2';
import ContactList2 from './ContactList2';
import EditContact2 from './EditContact2';
import ViewContact2 from './ViewContact2';
import Navbar from './Navbar';

import axios from 'axios';




const App = () => {

  const [contacts, setContacts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/data');
      console.log(res.data);
      setContacts(res.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    getProducts();

  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/ContactList2" />} />
        <Route path="/AddContact2" element={<AddContact2 setContacts={setContacts} contacts={contacts} />} />
        <Route path="/ContactList2" element={<ContactList2 setContacts={setContacts} contacts={contacts} />} />
        <Route path="/EditContact2/:id" element={<EditContact2 setContacts={setContacts} contacts={contacts} />} />
        <Route path="/view-contact/:id" element={<ViewContact2 contacts={contacts} />} />
      </Routes>

    </>
  );
};

export default App;