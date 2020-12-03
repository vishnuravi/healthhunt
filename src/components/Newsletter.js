import React from "react";

function Newsletter() {
	return (
		<div>
			<h4>Newsletter</h4>
			<div className="newsletter_container">
				<div className="signup_container">
					<span className="signup_message">
						Keep up to date with the latest innovations in health tech 👇
					</span>
					<form>
						<input
							className="email_field"
							type="email"
							placeholder="Your email"
						/>
						<input
							className="submit_button"
							type="submit"
							value="SUBSCRIBE"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Newsletter;
