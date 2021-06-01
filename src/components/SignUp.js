import React, { useState } from "react";
import fire from "../config/fire";
import './User.css';
import {Link, useHistory} from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let history= useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const signup = (e) => {
    e.preventDefault();
    if (name === ''){
      alert('Enter you name')
    }
    else if (password.length < 6) {
      alert('Password should be 6 characters or more')
    }
    else {
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        var user= fire.auth().currentUser;
        user.updateProfile( {
          displayName: name
        })
        .then(() => {
          console.log('name updated')
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        if(err.code==='auth/email-already-in-use') {
          alert('You already have an account please proceed to Login')
          history.push('/login');
        }
        if (password === ''){
          alert('Enter your password')
        }
        if (email === ''){
          alert('Enter your email')
        }
      });
    }
    
  };

  return (
    <div id="signup_background">
      <div>
        
        <form>
          <h1 id="signup">Sign Up</h1>
          <div id="name">
            <label>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              id='input_name'
              onChange={(e) => handleNameChange(e)}
              value={name}
              required
            ></input>
          </div>
          <div id="email">
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              id='input_email'
              onChange={(e) => handleEmailChange(e)}
              value={email}
              required
            ></input>
          </div>
          <div id="password">
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              id='input_password'
              onChange={(e) => handlePasswordChange(e)}
              value={password}
              minLength="6"
              required
            ></input>
          </div>
          <button id="signup_button" onClick={(e) => signup(e)}>Sign Up</button>
          <Link id="have_account" to='/login'>Already have an account ? Log In</Link>
        </form>
      </div>
    </div>
  );
}
