import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Product: </label>
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value) }} />
                </div>
                <br />
                <div>
                    <label>Price: $</label>
                    <input type="number"
                    name="price"
                    value={price}
                    onChange={(e) => {setPrice(e.target.value) }} />
                </div>
                <br />
                <div>
                    <label>Description: </label>
                    <input type="text"
                    name="title"
                    value={description}
                    onChange={(e) => {setDescription(e.target.value) }} />
                </div>
                <br />
                <input type="submit" value="Update" />

            </form>
        </div>
    )
}

export default UpdateProduct;