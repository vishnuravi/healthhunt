import React from "react";
import ProductList from './ProductList';

const Designs = () => {

	return (
		<>
			<img src={process.env.PUBLIC_URL + '/hospital_building.png'} width="100%" alt="" className="mb-4 mt-4" style={{ borderRadius: '10px' }} />
			<h4 className="mt-4">Latest in Healthcare Design</h4>
			<ProductList type={'design'} />
		</>
	)
}
export default Designs;
