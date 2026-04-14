import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


export default function Registration() {
  const [email,setemail]= useState('');
  const [pass, setpass]=useState('');
  const [usename, setusername]=useState('');
   const nav= useNavigate();

  const login= async (e)=>
   {
    e.preventDefault()
    try{
 await (auth,email,pass);
  nav("/");
    }
   catch(error)
   {
    alert("User Not Registered")
   }
  
   }
  return (
   <div>	
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Furni<span>.</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li><a className="nav-link" href="shop.html">Shop</a></li>
          <li><a className="nav-link" href="about.html">About us</a></li>
          <li><a className="nav-link" href="services.html">Services</a></li>
          <li><a className="nav-link" href="blog.html">Blog</a></li>
          <li><a className="nav-link" href="contact.html">Contact us</a></li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><a className="nav-link" href="#"><img src="images/user.svg" /></a></li>
          <li><a className="nav-link" href="cart.html"><img src="images/cart.svg" /></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <form onSubmit={Registration}>
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                UserName
              </label>
              <input
                type="email"
                className="form-control"
                value={usename}
                onChange={(e) => setusername(e.target.value)}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
  {/* Start Footer Section */}
  <footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <img src="images/sofa.png" alt="Image" className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
            <form action="#" className="row g-3">
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-auto">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
          <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <ul className="list-unstyled custom-social">
            <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Support</a></li>
                <li><a href="#">Knowledge base</a></li>
                <li><a href="#">Live chat</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Nordic Chair</a></li>
                <li><a href="#">Kruzo Aero</a></li>
                <li><a href="#">Ergonomic Chair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  {/* License information: https://untree.co/license/ */}
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  </div>
)
}