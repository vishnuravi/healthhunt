import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SignIn from './SignIn';

const SignInModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body>
				<SignIn />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-dark" onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default SignInModal;