import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AllProducts = (props) => {

    const { removeFromDom, productList, setProductList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then (res => {
                console.log(res.data);
                setProductList(productList.filter((product, index) => product._id !== productId));
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>All Products</h1>
            {
                productList.map((product, index) =>(
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title} </Link>
                        |
                        <Link to={`/product/edit/${product._id}`}> Edit </Link>
                        |
                        <button onClick={() => {deleteProduct(product._id)}}> Delete </button>
                    </div>
                    
                ))
            }
            
        </div>
    )

}

export default AllProducts;