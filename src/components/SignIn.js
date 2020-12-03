import React from 'react';
import Nav from './Nav';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from "react-router-dom";
import firebase from 'firebase';

const SignIn = () => {
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    };

    return (
        <>
            <Nav />
            <div className="text-center mt-4">
                <h1>Sign In</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="mt-4" />
                <p className="lead">Need an account? <Link to="/register">Sign up here.</Link></p>
            </div>
        </>
    )
}

export default SignIn;