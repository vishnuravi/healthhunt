import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInModal from "./SignInModal";



const Nav = () => {

	const [modalShow, setModalShow] = useState(false);

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
						<button onClick={() => setModalShow(true)} className="signup_button">Sign In</button>
					</div>
				</header>
			</div>

			<SignInModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			
		</div>
	);
}
export default Nav;
