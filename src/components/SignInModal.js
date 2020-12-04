import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const SignInModal = (props) => {
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

		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="mt-4" />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-dark" onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SignInModal;