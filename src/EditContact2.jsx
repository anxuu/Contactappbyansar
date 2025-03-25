import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

export default function EditContact2({ setContacts, contacts }) {
    const { id } = useParams();
    // const contact = contacts[parseInt(id)];
    const navigate = useNavigate();




    const [editedContact, setEditedContact] = useState(() => {
        return contacts.find(contact => contact._id === id) || { name: '', mobile: '', email: '', photo: '' };
    });

    if (!editedContact || !editedContact.name) {
        return (
            <div>
                <Navbar />
                <p>Loading contact details...</p>
            </div>
        );
    }

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {


        const EditContact = async () => {
            try {
                const res = await axios.put(`http://localhost:3000/data/${id}`, editedContact);
                console.log(res.data);

                setContacts(prevContacts =>
                    prevContacts.map(contact =>
                        contact._id === id ? editedContact : contact
                    )
                );

                navigate("/ContactList2");

            } catch (error) {
                console.log("Error updating contact:", error);
            }
        };

        EditContact();

    }

    return (
        <div className="edit-contact-container">
            <Navbar />

            <h3 className="edit-contact-heading">Edit Contact</h3>
            <p className="edit-contact-description">
                Update the contact details below. Click 'Update' to save or 'Cancel' to go back.
            </p>

            <div className="edit-contact-form">
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={editedContact.name}
                    />

                    <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile"
                        onChange={handleChange}
                        value={editedContact.mobile}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={editedContact.email}
                    />
                </div>

                <img
                    srcSet={
                        editedContact.photo ||
                        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="Profile"
                    className="profile-image"
                />
            </div>

            <div className="button-container">
                <button onClick={handleUpdate}>Update</button>
                <Link to={'/ContactList2'} className="cancel-button">
                    Cancel
                </Link>
            </div>
        </div>
    );
}

