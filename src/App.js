
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import ViewProduct from './component/ViewProduct';
import Login from './component/Login';
import Master from './component/layouts/Master';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
      <Route path='/admin' element={<Master Comp={Home}/>}></Route>
     
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
      <Route path='/:id' element={<ViewProduct/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
