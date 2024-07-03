import React,{useEffect,useState} from "react";
import {BrowserRouter as Router,Link,useLocation,useHistory} from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from "../../config/config";

function Product(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    },[true])

    function getProducts(){
        axios.get(BASE_URL+'/api/products')
        .then((result) => {
            setProducts(result.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    return(
        <>
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                    <h3>Product List</h3>
                                </div>
                                <div className="col-6 text-right">
                                    <Link to="/products/create" className="btn btn-success">Create New</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Act</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length > 1?
                                        products.map((val,index) =>
                                            <tr key={index}>
                                                <td> {index+1} </td>
                                                <td> {val.name} </td>
                                                <td> {val.price} </td>
                                                <td> {val.image} </td>
                                                <td>  </td>
                                            </tr>
                                        )
                                    :
                                        <tr>
                                            <td colSpan={6} className="text-center"> <strong>Records are not found!</strong> </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Product