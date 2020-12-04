import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import Product from "./Product";
import SignInModal from './SignInModal';

const ProductList = ({ type }) => {

    const [data, setData] = useState([]);

    const [sortBy, setSortBy] = useState('votes');

    const [modalShow, setModalShow] = useState(false);

    const db = firebase.firestore();

    const upvote = (id) => {
        setModalShow(true);
    };

    const fetchProducts = () => {
        setData([]);
        db.collection(type).orderBy(sortBy, 'desc').get().then((querySnapshot) => {
            querySnapshot.forEach((product) => {
                const productData = { id: product.id, ...product.data() };
                setData(data => [...data, productData]);
            })
        });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {data.map(product => (
                <Product {...product} upvote={upvote} />
            ))}
            <SignInModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ProductList;
