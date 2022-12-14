import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tracker">Tracker</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;