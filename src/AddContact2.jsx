import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import axios from 'axios';

export default function AddContact2({ setContacts, contacts }) {

    const [stored, setStored] = useState({ name: '', photo: '', mobile: '', email: '', company: '', title: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStored({ ...stored, [e.target.name]: e.target.value });
    }

    const handleClick = async () => {
        if (!stored.name || !stored.mobile || !stored.email) {
            alert("Name, Mobile, and Email are required!");
            return;
        }


        try {
            const response = await axios.post('http://localhost:3000/data', stored);
            console.log("data is going currently in AddContact2 ", response.data);
            setContacts([...contacts, stored]);
            setStored({ name: '', photo: '', mobile: '', email: '', company: '', title: '' });
            navigate("/ContactList2");
        } catch (error) {
            console.error("Error Updating contact:", error);
        }
    }

    return (
        <div className="add-contact-container">
            <Navbar />

            <h3 className="add-contact-title">Create Contact</h3>
            <p className="add-contact-description">
                Fill in the details below to create a new contact. Add essential information like name, phone number, email, and company to keep your contact list organized and up-to-date.
            </p>

            <div className="add-contact-form">
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={stored.name} />
                <input type="number" name="mobile" placeholder="Mobile" onChange={handleChange} value={stored.mobile} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={stored.email} />

                {stored.photo && <img src={stored.photo} alt="Contact Preview" className="contact-preview" />}
            </div>

            <div className="add-contact-actions">
                <button onClick={handleClick} className="create-btn">Create</button>
                <Link to={'/ContactList2'} className="cancel-btn">Cancel</Link>
            </div>
        </div>
    );
}
