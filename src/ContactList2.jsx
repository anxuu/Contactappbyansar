

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';

import axios from 'axios';



export default function ContactList2({ contacts, setContacts }) {




    const handleDelete = async (e, _id) => {
        e.preventDefault();
        try {

            setContacts((prevContacts) => prevContacts.filter(contact => contact._id !== _id));
            await axios.delete(`http://localhost:3000/data/${_id}`);
            console.log('deleted');


        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };



    return (
        <div className="contact-list-container">
            <Navbar />

            <br />

            <div className="header">
                <span>Contact Manager</span>
                <Link to="/AddContact2" className="add-contact-btn">+ New</Link>
            </div>

            <div className="welcome-message">
                Welcome to your Contact Manager. Keep track of your contacts, manage their details, and stay organized with ease.
            </div>

            <br />

            {contacts.length > 0 ? (
                contacts.map((contact, index) => (
                    <div key={index} className="contact-card">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            alt="User Icon"
                            className="contact-image"
                        />

                        <div className="contact-details">
                            <p><strong>Name:</strong> {contact.name}</p>
                            <p><strong>Mobile:</strong> {contact.mobile}</p>
                            <p><strong>Email:</strong> {contact.email}</p>
                        </div>

                        <div className="contact-actions">
                            <Link to={`/view-contact/${index}`} className="action-btn">👁</Link>
                            <Link to={`/EditContact2/${contact._id}`} className="action-btn">✏️</Link>
                            <button onClick={(e) => handleDelete(e, contact._id)} className="action-btn">❌</button>
                        </div>


                    </div>
                ))
            ) : (
                <div className="no-contacts">No contacts to display</div>
            )}
        </div>
    );
}
