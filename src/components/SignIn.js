import React from 'react';
import Nav from './Nav';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const SignIn = () => {
    const uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: '/',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    };

    return (
        <>
            <Nav />
            <div className="text-center mt-4">
                <h1>Sign In</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="mt-4" />
            </div>
        </>
    )
}

export default SignIn;