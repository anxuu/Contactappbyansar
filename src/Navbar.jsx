import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div style={{ borderRadius: '10px', padding: '10px' }} >

                {/* <p>Navbar renders here </p> */}


                <nav className="navbar navbar-dark  bg-dark navbar-expand-sm" >
                    <div className="container">
                        <Link to={'/ContactList2'} className="navbar-brand"> <i className="bi bi-phone"></i> Contact <span className="text-warning"> Manager  </span>  </Link>
                    </div>
                </nav>

            </div>

        </>
    )
}