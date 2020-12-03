import React from "react";

const Nav = () => {
	return (
		<div>
			<div className="header_container">
				<header className="header">
					<div className="nav">
						<div className="logo">
							<img src={process.env.PUBLIC_URL + '/android-chrome-192x192.png'} alt="" />
						</div>
						<ul className="d-none d-md-block">
							<li>Challenges</li>
							<li>Innovation Consulation</li>
							<li>Events</li>
						</ul>
					</div>
					<div className="auth_button">
						<button className="login_button">Log in</button>
						<button className="signup_button">Sign up</button>
					</div>
				</header>
			</div>
		</div>
	);
}
export default Nav;
