import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/contact/ContactList';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import UpdateContact from './components/updatecontact/UpdateContact';
import AddContact from './components/addcontact/AddContact';

const App = () => {
  return (
    <>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
