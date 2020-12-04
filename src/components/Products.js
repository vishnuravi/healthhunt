import React, { useState } from "react";
import Welcome from './Welcome';
import ProductList from './ProductList';

const Products = () => {

	const [showWelcome, setShowWelcome] = useState(true); // show welcome message to first timers

	return (
		<>
			{ showWelcome &&
				<Welcome setShowWelcome={setShowWelcome} />
			}

			<h4 className="mt-4">Latest Innovations</h4>

			<ProductList type={'products'} />
		</>
	)
}

export default Products;
