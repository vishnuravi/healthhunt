import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<div className="header_container">
				<header className="header">
					<div className="nav">
						<div className="logo">
							<Link to="/">
								<img src={process.env.PUBLIC_URL + '/android-chrome-192x192.png'} alt="" />
							</Link>
						</div>
						<ul className="d-none d-md-block">
							<li><Link to="/challenges">Challenges</Link></li>
							<li><Link to="/consultation">Innovation Consultation</Link></li>
							<li><Link to="/events">Events</Link></li>
						</ul>
					</div>
					<div className="auth_button">
						<Link to="/signin"><button className="login_button">Sign in</button></Link>
						<Link to="/register"><button className="signup_button">Register</button></Link>
					</div>
				</header>
			</div>
		</div>
	);
}
export default Nav;
