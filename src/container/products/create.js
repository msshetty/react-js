import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Link,useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../config/config';

function ProductCreate() {
    let navigate = useNavigate();
    const [address, setAddress] = useState({
        name: '',
        price: '',
        decsription: '',
    });

    const handleInput = e => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        address[name] = value;
        setAddress(address);

    };
    function handleAddressForm(e){
        e.preventDefault();
        axios.post(BASE_URL+'/api/products',address).then((result) => {
            alert('User profile updated successfully!')
            navigate.push('/products')
        }).catch(err => {
            console.log(err);
            alert('User profile failure to updated!')
        })
    }
    return (
        <div className="container mt-2">
            
            <div className="row">
                <div className="col-md-12 text-right">
                    <Link to="/products" className="btn btn-primary" >Products</Link>
                </div>
                <div className="col-md-12 mt-1">
                    <div className='card'>
                        <div className='card-body'>
                            <form onSubmit={handleAddressForm}>
                                <div className="row">
                                    <div className="form-group col-md-4">
                                        <label> Product Name</label>
                                        <input type="text" name="name" className="form-control" onChange={handleInput} placeholder="Enter Name" required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label >Price</label> 
                                        <input type="number" name="price" minLength="0" className="form-control" onChange={handleInput} placeholder="Enter Mobile Number" required /> 
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label >Image</label> 
                                        <input type="file" name="image" minLength="0" className="form-control" onChange={handleInput} placeholder="Enter Mobile Number" required /> 
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label> Decsription</label>
                                        <textarea name="description" className='form-control' onChange={handleInput}></textarea>
                                    </div>
                                    
                                    <div className="form-group col-md-12">
                                        <label className="invisible">Browse</label><br/>
                                        <button type="submit" className="btn btn-primary mr-2" >Save</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
