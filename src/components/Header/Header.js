import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="nav-thing">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/book">Book</Link></li>
                </ul>
                <div className="head-text">
                    <h1>Burj-Al-Arab</h1>
                    <h1>A global icon of Arabian luxury</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;