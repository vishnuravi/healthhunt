import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function GetInvolved() {
    return (
        <div className="container mt-4">
            <img src={process.env.PUBLIC_URL + '/scientist.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px' }} />

            <p className="lead">Upon joining our community, you can take part in:</p>
            <h4 className="light-blue"><u>Health Innovation Challenges</u></h4>
            <br />
            <ul>
                <li>
                    <p className="lead">How might service learning redesign help adopt remote monitoring?</p>
                </li>
            </ul>
            <h4 className="light-blue"><u>Health Innovator Matchmaking</u></h4>
            <br />
            <ul>
                <li>
                    <p className="lead">Meet healthcare innovators driven by a common challenge!</p>
                </li>
            </ul>
            <h4 className="light-blue"><u>Innovation Consultation</u></h4>
            <br />
            <ul>
                <li>
                    <p className="lead">Book a consultation with an innovator who can help you with your project.</p>
                </li>
            </ul>
            <br />
            <p>
                <Link to="/signin"><Button variant="outline-dark">Sign up to participate</Button></Link>
            </p>
        </div>
    )
}
