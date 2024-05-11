import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Franchise Mngt</span>
          </a>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Franchise Management
                </a>
              </div>
            </div>
           
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      <Link to="/Body">Dashboard</Link>

                      
                    </p>
                  </a>
                 
                </li>
               
                
                <li className="nav-item">
                  <a  className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                      Products
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/Product" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Product
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Unit" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Unit
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Brand" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Brand
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/category" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Catagory
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Tax" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Tax
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                      Suplier
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/Suplier" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Suplier
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Supliergroup" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        SuplierGroup
                      </Link>
                    </li>

                    
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                      Costumer
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/Costumer" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        Costumer
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/CostumerGroup" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        CostumerGroup
                      </Link>
                    </li>

                    
                    
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree" />
                    <p>
                      Purchase
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/Purchase" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                       Make Purchase
                      </Link>
                    </li>
                    

                    
                    
                  </ul>
                </li>
                              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}
