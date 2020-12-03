import React from "react";
import Community from "./Community";
import Newsletter from "./Newsletter";

function Sidebar(props) {
	return (
		<>
			<Community data={props.data} />
			<Newsletter />
		</>
	);
}

export default Sidebar;
