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
					</div>
					<div className="auth_button">
						<Link to="/signin"><button className="signup_button">Sign In</button></Link>
					</div>
				</header>
			</div>
		</div>
	);
}
export default Nav;
