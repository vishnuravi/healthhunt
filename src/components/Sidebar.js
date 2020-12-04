import React from "react";
import Community from "./Community";
import Newsletter from "./Newsletter";
import team from '../data/team.json';

function Sidebar() {
	return (
		<>
			<Community data={team} />
			<Newsletter />
		</>
	);
}

export default Sidebar;
