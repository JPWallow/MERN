import React, { useEffect, useState } from 'react';
import axios from "axios";

const CreateProduct =  (props) => {

    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const createHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/products",{
            title: title,
            price: price,
            description: description,
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");

                setProductList([...productList, res.data])
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={createHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} name="title" onChange= {(e) => setTitle(e.target.value)} />
                </div>         
                <br />
                <div>
                    <label>Price: $</label>
                    <input type="number" value={price} name="price" onChange= {(e) => setPrice(e.target.value)} />
                </div>      
                <br />    
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} name="description" onChange= {(e) => setDescription(e.target.value)} />
                </div>   
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;



