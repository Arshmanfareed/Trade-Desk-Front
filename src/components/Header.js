import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import RegisterPage from "../pages/RegisterPage";
import { useAuth } from '../components/AuthContext';

function Header() {
  const { authenticated, logout } = useAuth();
  return (

    <>


      <header className="mastheader">
        <div className="container-fluid">
          <Navbar
            className="navbar navbar-expand-lg navbar-light bg-body-tertiary"
            expand="lg"
          >
            <Navbar.Brand to="/" className="navbar-brand" href="/">
              <h1 className="text-white">Your Trade Desk</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className=" home-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="" to="/about">
                    About
                  </Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropbtn">Groups <FaChevronDown className="custom-chevron" /></a>
                  <div className="dropdown-content">
                    <a className="dropdown-item"  href="javascript:void(0);">Currencies</a>
                    <a className="dropdown-item" href="javascript:void(0);">Stocks</a>
                    <a  className="dropdown-item" href="javascript:void(0);">Commodities</a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="" to="/register">
                    Register
                  </Link>
                </li>
                {authenticated ? (   
                  <li className="nav-item">
                    <Link className="" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="" to="/login">
                      Login
                    </Link>
                  </li>
                )
                }
               
                
              </ul>
            </Navbar.Collapse>
            <div className="header-icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/images/search.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/images/filter.png" />
                  </a>
                </li>
              </ul>
            </div>
          </Navbar>
        </div>
      </header>
    </>
  );
}

export default Header;
