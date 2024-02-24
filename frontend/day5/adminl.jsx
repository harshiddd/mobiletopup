import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const ALogin = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ newUsername: '', newPassword: '' });

  const handleLogin = () => {
    // Implement login logic
    alert('Login functionality to be implemented.');
  };

  const handleSignup = () => {
    // Implement signup logic
    alert('Signup functionality to be implemented.');
  };

  return (
    <div className='l' >

      
    <div className="App">
        <h1 className='fib'>welcome to fiberrr!!</h1>
        <br></br>
        <br></br>
        <br></br>
      <div className="container">
        <form id="loginForm">
          <h2 className='lo' style={{marginRight:700}}>Login</h2><br></br>
          <label htmlFor="username">Email</label>
          <br/>
          
          <input className='mn'
            type="text"
            id="email"
            name="email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, mobilenumber: e.target.value })}
            placeholder='Enter your email'
            required
          />
          <br></br>
          <br></br>

          <label htmlFor="password">Password</label>
          <br/>
          
          <input
          className='ps'
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
            placeholder='Enter your password'
          />
          <br></br>
          <br></br>

          <NavLink to ="/admin"><button style={{width:50,height:30,color:"bluev"}} type="submit">Login</button></NavLink>
          <br></br>
         
         
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </form>

        {/* <hr /> */}

        {/* <form id="signupForm">
          <h2>Sign Up</h2>
          <label htmlFor="newUsername">Username:</label>
          <input
            type="text"
            id="newUsername"
            name="newUsername"
            value={signupData.newUsername}
            onChange={(e) => setSignupData({ ...signupData, newUsername: e.target.value })}
            required
          />

          <label htmlFor="newPassword">Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={signupData.newPassword}
            onChange={(e) => setSignupData({ ...signupData, newPassword: e.target.value })}
            required
          />

          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </form> */}
      </div>
    </div>
    </div>
    
  );
};

export default ALogin;

