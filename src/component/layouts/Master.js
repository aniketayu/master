import React, { useEffect, useState } from 'react'




import { useNavigate } from 'react-router'
import AuthUser from '../AuthUser'
import Menu from '../Menu'
import Header from '../Header'



const Master = (props) => {

    const { http, logout } = AuthUser();
    // chack jwt token
    const Navigate = useNavigate();
    const [number, setnumber] = useState(1);
    useEffect(() => {
      if (!sessionStorage.getItem("token")) {
        Navigate("/");
      }
    }, [number]);

  return (
    <div>
    
    <div class="content-wrapper">
     
     

            

          
     
<props.Comp></props.Comp>
     

    </div>
    </div>
  )
}

export default Master
