import React, { useState, useEffect } from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import firebase from "firebase";
import { Jumbotron, Button } from "react-bootstrap";

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
	}
];


const Products = () => {

	const [data, setData] = useState([]);

	const db = firebase.firestore();

	const upvote = (id) => {
		let updatedData = data.map(product => {
			if (product.id === id) {
				product.votes += 1;
			}
			return product;
		});
		setData(updatedData);
	};

	const fetchProducts = () => {
		db.collection('products').get().then((querySnapshot) => {
			querySnapshot.forEach((product) => {
				console.log(product.data().name);
				const productData = { id: product.id, ...product.data() };
				setData(data => [...data, productData]);
			})
		});
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Jumbotron className="mt-3">
						<p className="lead">Healthcare innovators - HealthHunt is for you.</p>
						<p>
							We are a community of healthcare innovators.
  						</p>
						<p>
							<Button variant="primary">Join our community</Button>
						</p>
					</Jumbotron>
					<h4 className="mt-4">Latest Solutions</h4>
					{data.map(product => (
						<Product {...product} upvote={upvote} />
					))}
				</div>
				<div className="col-4 d-none d-md-block">
					<h4 className="mt-4">Our innovators</h4>
					<Sidebar data={images} />
				</div>
			</div>
		</div>
	)
}
export default Products;
