import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Events from "./components/Events";
import './styles/style.scss';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/register" component={SignIn} />
				<Route exact path="/events" component={Events} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
