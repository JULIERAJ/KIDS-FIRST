import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../img/kids_first_logo_beta.png'
import signup from '../img/signup.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../actions/userActions';

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [is_parent, setIs_parent] = useState(true);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and confirm password are not matching');
    }
    else {
      dispatch(register(email, password, is_parent));
      props.history.push('/verify');
    }
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


        <div className='form-content-right'>
          <form className='form' onSubmit={submitHandler}>
            <h1 className="form-title">
              Sign up Kids First
            </h1>

            <div className='form-inputs'>
              <label className='form-label mt-4'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'                
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className='form-input-btn' disabled={!(email && password && confirmPassword)} type='submit'>
              <p className="signup-form">Sign up</p>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}