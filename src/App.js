import React from "react";
import Products from "./components/Products";
import Nav from "./components/Nav";
import './styles/style.scss';

const App = () => {
	return (
		<>
			<Nav />
			<Products />
		</>
	);
};

export default App;
