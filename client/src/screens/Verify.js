import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../img/kids_first_logo_beta.png'
import verify_img from '../img/verify-img.png'
import signup from '../img/signup.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../actions/userActions';

export default function Verify(props) {
  const [email, setEmail] = useState('');
  const [is_parent, setIs_parent] = useState(true);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
        dispatch(register(email, is_parent));
        props.history.push('/MyInfo');    
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand href="/"><img src={logo} className="logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="navbar-text">
            Already a member? <a href="/Signin">Log in</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={signup} alt='spaceship' />
        </div>


        <div className='verify-content-right'>
             <div className="verify">
                <img src={verify_img} className="verify-img" alt=""/>
                <h1 className="verify-h1"> Verify your Email  </h1>
                <p className='verify-p'>A verification email has been sent to emma.clark@gmail.com with a line. Please verify your email address to log into KIDSFIRST.</p>
                <a href='#' id='a-tag' className='verify-resend' onClick={submitHandler}>Resend Email </a>
          </div>
        </div>
      </div>
    </>

  )
}