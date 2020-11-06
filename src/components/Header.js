import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h3>Social Media</h3>
            </Link>

            <div className="right menu">
                <Link to="/" className="item">
                    <h3>Home</h3>
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default Header;