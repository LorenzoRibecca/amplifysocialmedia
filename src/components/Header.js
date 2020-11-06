import React from 'react';
import { Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

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
                <AmplifySignOut />
            </div>
        </div>
    );
}

export default withAuthenticator(Header);