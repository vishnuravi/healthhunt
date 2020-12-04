import React, { useState, useEffect } from "react";
import Product from "./Product";
import firebase from "firebase";
import { Jumbotron, Button } from "react-bootstrap";

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
		<>
			<Jumbotron className="mt-3">
				<p style={{ color: "gray", fontSize: "2.5em"}}>Hi there!</p>
				<p style={{ color: "gray", fontSize: "2em" }}>We take health implementation science seriously.</p>
				<p className="lead">Are you a healthcare provider preparing for your next innovation programme?
				Or perhaps you have mastered the secrets of successful service redesign?
				Perhaps you have a clever API you want the world to know about?</p>
				<Button variant="outline-dark">Join our community of H-hunters!</Button>
			</Jumbotron>

			<h4 className="mt-4">Featured Innovations</h4>

			{data.map(product => (
				<Product {...product} upvote={upvote} />
			))}

		</>
	)
}
export default Products;
