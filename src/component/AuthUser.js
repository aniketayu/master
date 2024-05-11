import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    return userString;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate("/admin");
    window.location.reload(false);
  };

  const logout = () => {
    navigate("/");
    sessionStorage.clear();
  };
  // console.log("send token");
  // console.log(token);
  const http = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    setToken: saveToken,
    token,
    user,
    http,
    logout,
    clearToken: logout,
  };
}
