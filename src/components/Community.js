import React from "react";
import { Link } from "react-router-dom";

const Community = (props) => {
	return (
		<div>
			<div className="community_container">
				<div className="community_list">
					{props.data.map(person => (
						<span>
							<img src={person.img} alt={person.name} data-toggle="tooltip" data-placement="top" title={person.name} />
						</span>
					))}
				</div>
				<footer>
					<p><Link to="/signin">Join our community</Link></p>
				</footer>
			</div>
			<h4>Featured Article</h4>
			<div className="sponsored_container">
				<div className="sponsored_message">
					<span>
						<a href="https://www.nature.com/articles/s41746-018-0059-8">Beyond “implementation”: digital health innovation and service design</a>
					</span>
				</div>
				<div className="background_image_article"></div>
			</div>
			<h4>Featured Book</h4>
			<div className="sponsored_container">
				<div className="sponsored_message">
					<span>
						<a href="https://mitpress.mit.edu/books/health-design-thinking">Health Design Thinking:
Creating Products and Services for Better Health</a>
					</span>
				</div>
				<div className="background_image_book"></div>
			</div>
		</div>
	);
}
export default Community;
