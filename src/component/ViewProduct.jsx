import React, { useEffect, useState } from 'react'
import productservice from '../service/productservice';
import { Link, useParams } from 'react-router-dom';

const ViewProduct = () => {
    const {id} = useParams();
  const [product,setProduct] = useState([]);
  console.log(product);
  const [msg,setMsg]=useState("");
  useEffect(()=>{
    
productservice.getProductById(id).then((res)=>{
    setProduct(res.data);
    
})
  },[]);

  const init = () => {
    productservice.getAllProduct().then((res)=>{
      console.log(res.data);
      
    })
  }

  const deleteProduct=(id)=>{
    productservice.deleteProduct(id).then((res)=>{
      setMsg("product Deleted successfully");

      init();
    }).catch((error)=>{
      console.log(error);
    })
  }
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
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.status}</td>
      <td>
       
        <button onClick={()=> deleteProduct(product.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
        <Link to={'/'+product.id} className='btn btn-sm btn-success ms-1'>View</Link>
      </td>
    </tr>
 
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

export default ViewProduct
