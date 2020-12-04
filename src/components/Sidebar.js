import React from "react";
import Community from "./Community";
import Newsletter from "./Newsletter";

const images = [
	{
		img:
			"https://pbs.twimg.com/profile_images/1174410509480812544/CutHTR7o_400x400.jpg"
	},
	{
		img:
			"https://pbs.twimg.com/profile_images/1308163956029227009/gaQbCHkY_400x400.jpg"
	},
	{
		img:
			"https://ca.slack-edge.com/T01EB1BLL9M-U01F3RKMRKL-1ec09c9eec59-512"
	},
	{
		img:
			"https://ca.slack-edge.com/T01EB1BLL9M-U01EBTKNP2T-e2cf20c1745b-512"
	},
	{
		img:
			"https://ca.slack-edge.com/T01EB1BLL9M-U01FRAEPZ2L-9b4a9ce8a97e-512"
	},
	{
		img:
			"https://ca.slack-edge.com/T01EB1BLL9M-U01F78P1JM7-df28cd497797-512"
	}
];


function Sidebar(props) {
	return (
		<>
			<Community data={images} />
			<Newsletter />
		</>
	);
}

export default Sidebar;
