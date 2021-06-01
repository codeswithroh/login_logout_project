import React, { useState } from "react";
import fire from "firebase";
import { useHistory } from "react-router-dom";
import "./User.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [forgetpassword, setForgetPassword] = useState(false);
  const [forgetpasswordmail, setForgetPasswordMail] = useState('');
  let history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        var user = fire.auth().currentUser;
        user.updateProfile({
          displayName: name,
        });
        if (name === "") {
          alert("Enter your name");
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          alert("Enter Correct Password");
        } else {
          alert("Enter the correct Email");
        }
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    fire.auth().sendPasswordResetEmail(forgetpasswordmail)
    .then((res) => {
      alert('Check your inbox or spam folder to reset your password')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleFP = (e) => {
    e.preventDefault();
    setForgetPassword(!forgetpassword)
  }
  return (
    <div id="login_background">
      <div>
        <form>
          <h1 id='login'>Login</h1>
          <div id='name'>
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
          <div id='email'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              id='input_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div id='password'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              id='input_password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button id='login_button' type='submit' onClick={(e) => handleClick(e)}>
            Login
          </button>
          <button id='fp' onClick={(e) => handleFP(e)}>
            Forget Password ?
          </button>
        </form>
        {forgetpassword ? (
          <div id="forget_password">
            <div style={{display:"flex", flexDirection:'column', gap:"0.5em"}}>
              <input id="forget_password_mail" type="text" placeholder="Enter your mail" value={forgetpasswordmail} onChange={(e) => setForgetPasswordMail(e.target.value)} />
              <button id="forget_password_send" type="submit" onClick={(e) => handleForgetPassword(e)}>Send</button>
              <div id="close" onClick={() => setForgetPassword(!forgetpassword)}><i className='fa fa-times'></i></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
