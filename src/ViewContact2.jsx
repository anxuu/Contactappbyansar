import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import './App.css';

export default function ViewContact2({ contacts }) {
    const { id } = useParams();
    const contact = contacts[id];

    if (!contact) {
        return <div className="container"><Navbar /> <p>Contact not found!</p></div>;
    }

    return (
        <div className="container">
            <Navbar />

            <div className="contact-card">
                <h1>Contact Details</h1>
                {contact.photo && <img src={contact.photo} alt={contact.name} className="contact-photo" />}
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Mobile:</strong> {contact.mobile}</p>
                <p><strong>Email:</strong> {contact.email}</p>
            </div>

            <Link
                to="/ContactList2"
                className="back-button"
            >
                Back
            </Link>
        </div>
    );
}
