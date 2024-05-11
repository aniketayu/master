import React, { useEffect, useState } from 'react'
import productservice from '../service/productservice';
import { Link } from 'react-router-dom';
import AuthUser from './AuthUser';
import axios from 'axios';

const Home = () => {
  const { http } = AuthUser();
  const [productList,setProductList] = useState([]);
  const [msg,setMsg]=useState("");
  useEffect(()=>{
    
init();
deleteProduct();
  },[]);

  const init = () => {
   
    http.get().then((res)=>{
      console.log(res.data);
      setProductList(res.data);
    })
  }

  const deleteProduct = (id) => {
  http.get(`/deleteProduct/${id}`)
    .then((response) => {
      // Filter out the deleted product from the productList state
      console.log(response);
      const updatedProducts = productList.filter((product) => product.id !== id);
      setProductList(updatedProducts);
      setMsg("Product deleted successfully");
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
     
    });
};


  
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                <h1>All Products</h1>
              </div>
              {msg && <p className='fs-4 text-center text-danger'>{msg}</p>}
              <div className="card-body">
              <table  className="table table-striped">
  <thead>
    <tr>
      <th >Sr.No.</th>
      <th >Product Name</th>
      <th >Description</th>
      <th >Price</th>
      <th >Status</th>
      <th >Date</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
    {productList.map((p,num)=>(
    <tr>
      
      <td>{num+1}</td>
      <td>{p.productName}</td>
      <td>{p.description}</td>
      <td>{p.price}</td>
      <td>{p.status}</td>
      <td>{p.date}</td>
      <td>
        <Link to={'/editProduct/'+p.id} className='btn btn-sm btn-primary'>Edit</Link>
      
        <button className='btn btn-sm btn-danger ms-1' onClick={()=>{
               deleteProduct(p.id);
              
             }}>Delete</button>
        <Link to={'/'+p.id} className='btn btn-sm btn-success ms-1'>View</Link>
      </td>
    </tr>
  ))}
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

export default Home
