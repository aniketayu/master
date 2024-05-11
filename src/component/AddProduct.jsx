import React, { useEffect, useState } from 'react'
import productservice from '../service/productservice';
import AuthUser from './AuthUser';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AddProduct = () => {
    useEffect(()=>{

    },[]);
    const { http } = AuthUser();
    const [product,setProduct]=useState({});
   
    const formhandler=(e)=>{
        console.log(product);
        postProductToServer(product);
        e.preventDefault();
    }
    
   
    const [msg,setMsg]=useState("");
    const handleChange = (e)=>{

        const value= e.target.value;
        setProduct({...product,[e.target.name]:value});
    };
    const postProductToServer = (data) => {
        http.post(`/saveProduct`, data)
            .then((response) => {
                console.log(response);
                console.log("done");
                setMsg("Product added successfully");
                // Clear all form fields after successful submission
                setProduct({});
                
            })
            .catch((error) => {
                console.log(error);
                console.log("Not saved");
            });
    };
      
  return (
    <>
      <div className='container mt-3'>
      <div className='row'>
      <div className='col-md-6 offset-md-3'>
      <div className='card'>
        <div className="card-header fs-3 text-center" >
            Add Product
        </div>
        {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
      <div className='card-body'>

<form onSubmit={formhandler}>
    <div className='mb-3'>
<label>Enter Product Name</label>
<input  name='productName'
    id='productName' 
    onChange={(e)=>
  {
    setProduct({...product,productName:e.target.value})
  }
  } type='text'  value={product.productName || ''} className='form-control' ></input>
    </div>
    <div className='mb-3'>
<label>Enter Product Description</label>
<input  id='description' 
    onChange={(e)=>
  {
    setProduct({...product,description:e.target.value})
  }
  } type='text' name='description'  className='form-control'  value={product.description || ''}></input>
    </div>
    <div className='mb-3'>
<label>Enter Product Price</label>
<input  id='price' 
    onChange={(e)=>
  {
    setProduct({...product,price:e.target.value})
  }
  } type='text' name='price' className='form-control'  value={product.price || ''}></input>
    </div>
    <div className='mb-3'>
<label>Enter Product Status</label>
<input  id='status' 
    onChange={(e)=>
  {
    setProduct({...product,status:e.target.value})
  }
  } type='text' name='status' className='form-control'  value={product.status || ''}></input>
    </div>
    <div className='mb-3'>
                    <label>Select Date</label>
                    <br />
                    <input  id='date' 
    onChange={(e)=>
  {
    setProduct({...product,date:e.target.value})
  }
  } type='date' name='date' className='form-control'  value={product.date || ''}></input>
                  </div>
    <button className='btn btn-primary col-md-12'>Add Product</button>
</form>
      </div>

      </div>
      </div>
      </div>

      </div>
    </>
  )
}

export default AddProduct
