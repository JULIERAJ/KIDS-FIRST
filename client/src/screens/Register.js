import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';



export default function RegisterScreen(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [isParent, setIsParent] = useState(true);

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(firstName,lastName,email,dateOfBirth, password,isParent));
   // props.history.push('/signin');

  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
      <div className="zz">
        <form class="form-signin" onSubmit={submitHandler}>
          <h1 class="h4 mb-3 font-weight-normal text-center">Create account</h1>


          <label for="firstName" class="formLabel">FirstName</label>
          <input type="text" id="firstName" class="form-control" onChange={(e) => setFirstName(e.target.value)} required />

          <label for="lastName" class="formLabel">LastName</label>
          <input type="text" id="lastName" class="form-control" onChange={(e) => setLastName(e.target.value)} required />

          <label for="inputEmail" class="formLabel">Email address</label>
          <input type="email" id="inputEmail" class="form-control" onChange={(e) => setEmail(e.target.value)} required autofocus />

          <label for="dateOfBirth" class="formLabel">DateOfBirth</label>
          <input type="text" id="dateOfBirth" class="form-control" onChange={(e) => setDateOfBirth(e.target.value)} required />

          <label for="inputPassword" class="formLabel">Password</label>
          <input type="password" id="inputPassword" class="form-control" onChange={(e) => setPassword(e.target.value)} required />

         

          <div class="mt-4 mb-4">
         <label className="newCustmer">
              Returning customer?{' '}
               <Link className="linkCreateAccount" to="">
                Sign in
            </Link> 
            </label> 
          </div>
          <button class="btnForAll  btn-block waves-effect waves-light" type="submit">Create your Rshine account</button>
        </form>
      </div>
  );
}