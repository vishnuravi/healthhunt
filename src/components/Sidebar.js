import React from "react";
import Community from "./Community";
import Newsletter from "./Newsletter";
import Form from "./Form";

function Sidebar(props) {
	return (
		<>
			<Community data={props.data} />
			<Newsletter />
		</>
	);
}

export default Sidebar;
