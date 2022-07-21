import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const OneProduct = (props) => {

    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then (res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>{oneProduct.title}</h1>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )

}

export default OneProduct;