import React, { useEffect, useState } from 'react'
import productservice from '../service/productservice';
import { useNavigate, useParams } from 'react-router-dom';
import AuthUser from './AuthUser';
import { ToastContainer, toast } from 'react-toastify';

const EditProduct = () => {
  const { http } = AuthUser();
  const[product,setProduct] = useState({
    
});
const {id} = useParams();
const navigate=useNavigate();
useEffect(()=>{
  http.get(id).then((res)=>{
    setProduct(res.data);
  }).catch((error)=>{
    console.log(error);
  })
},[]);

const [msg,setMsg]=useState("");
const handleChange = (e)=>{

    const value= e.target.value;
    setProduct({...product,[e.target.name]:value});
};

const formhandler=(e)=>{
  console.log(product);
  updateProductToServer(product,id);
  e.preventDefault();
}
const updateProductToServer = (data,id) => {
  http.post(`/editProduct/${id}`, data)
      .then((response) => {
          console.log(response);
          console.log("done");
          toast.success('Product updated successfully');
          setMsg("Product updated successfully");
          
          navigate("/");
          toast.success('Product updated successfully');
          setProduct(response.data);
      })
      .catch((error) => {
          console.log(error);
          console.log("Not saved");
      });
};


return (
<>

<ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
<input id='productName' 
    onChange={(e)=>
  {
    setProduct({...product,productName:e.target.value})
  }
  } type='text' name='productName' className='form-control' value={product.productName}></input>
</div>
<div className='mb-3'>
<label>Enter Product Description</label>
<input id='description' 
    onChange={(e)=>
  {
    setProduct({...product,description:e.target.value})
  }
  } type='text' name='description' className='form-control' value={product.description}></input>
</div>
<div className='mb-3'>
<label>Enter Product Price</label>
<input  id='price' 
    onChange={(e)=>
  {
    setProduct({...product,price:e.target.value})
  }
  }  type='text' name='price' className='form-control' value={product.price}></input>
</div>
<div className='mb-3'>
<label>Enter Product Status</label>
<input  id='status' 
    onChange={(e)=>
  {
    setProduct({...product,status:e.target.value})
  }
  }  type='text' name='status' className='form-control' value={product.status}></input>
</div>
<button className='btn btn-primary col-md-12'>Update</button>
</form>
  </div>

  </div>
  </div>
  </div>

  </div>
</>
)
}

export default EditProduct
