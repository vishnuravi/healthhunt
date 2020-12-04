import React from "react";
import { Link } from "react-router-dom";

const Community = (props) => {
	return (
		<div>
			<div className="community_container">
				<div className="community_list">
					{props.data.map(cv => (
						<span>
							<img src={cv.img} alt="worker" />
						</span>
					))}
				</div>
				<footer>
					<p><Link to="/register">Join our community</Link></p>
				</footer>
			</div>
			<h4>Featured Solution</h4>
			<div className="sponsored_container">
				<div className="sponsored_message">
					<span>
						Learn how to be awesome like Ausrine Latvyte
						</span>
				</div>
				<div className="background_image"></div>
			</div>
		</div>
	);
}
export default Community;
