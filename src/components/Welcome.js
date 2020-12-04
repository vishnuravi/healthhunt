import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Welcome({ setShowWelcome }) {
    return (
        <Alert className="mt-2 p-4" onClose={() => setShowWelcome(false)} style={{ background: '#FFFDFD', boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.05)' }} dismissible>
            <img src={process.env.PUBLIC_URL + '/health-innovation-splash.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px' }} />
            <p className="light-blue" style={{ fontSize: "2em" }}>Hi there!</p>
            <p style={{ fontSize: "1.75em" }}>We take <span className="light-blue">health implementation science</span> seriously.</p>
            <p className="lead">Are you a healthcare provider preparing for your next innovation programme?
            Or perhaps you have mastered the secrets of successful service redesign?
				Perhaps you have a clever API you want the world to know about?</p>
            <Button variant="outline-dark">Join our community of h-hunters!</Button>
        </Alert>
    )
}
