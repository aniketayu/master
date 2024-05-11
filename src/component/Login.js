import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthUser from "./AuthUser";



function Login() {
  const { http, setToken } = AuthUser();

  const notify = () =>
    toast.error("invalid credentials", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [btnDiseble, setDisebale] = useState(0);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const SetLoguser = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const sessIon_start = (e) => {
    e.preventDefault();
    setDisebale(1);
    // api call
    
    http
      .post("user/generate-token",login)
      .then((res) => {
       console.log(res);
        if (res.data.token) {
          setToken(res.data.user, res.data.token);
        }
        setDisebale(0);
      })
      .catch((error) => {
        setDisebale(0);
        notify();
      });
  };

  //   redireact check token jwt
  const redireact = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      redireact("/admin");
    }
  });
  return (
    <>
    
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
          Login Details
        </div>
    
      <div className='card-body'>
              {/* {/ <p className="login-box-msg">Sign in to start your session</p> /} */}
              <form onSubmit={(e) => sessIon_start(e)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    // value={setLogin.username}
                    placeholder="User-ID"
                    onChange={(e) => SetLoguser(e)}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    // value={setLogin.password}
                    onChange={(e) => SetLoguser(e)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                      disabled={btnDiseble}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
              {/* <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p> */}
              <p className="mb-0">
                {/* <Link to="/Adminregister" className="text-center">
                  Register a new membership
                </Link> */}
                
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
