import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="container">
            <div className="headline">
                <h2>Welcome To Calories R Gone</h2>
            </div>
            <div className="welcome">
                <p>This is an app that lets you track all of your meals</p>
                <p>for the day. It also will calculate all the calories</p>
                <p>you had for the day as well.</p>

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
