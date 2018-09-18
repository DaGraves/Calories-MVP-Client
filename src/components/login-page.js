import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import './login-page.css';

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="login-container">
        <div className="login-title">
            <h2>Sign In</h2>
        </div>
        <div className="login-form"></div>
            <LoginForm/>
        
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
