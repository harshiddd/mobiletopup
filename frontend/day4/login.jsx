import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signIn } from './service/auth';
import './sigm.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic form validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    e.preventDefault();

      const form={
        email:email,
        password:password
      };

      signIn(form)
            .then((res) => {
                
                sessionStorage.setItem('token', res.data.token);
                setEmail("");
                setPassword("");
                navigate('/home');
            })
            .catch((err) => {
                setEmail("");
                setPassword("");
                console.log(err);
               
            });
    }
  

    // Implement login logic here
    // alert('Login functionality to be implemented.');
  

  return (
    <div className='l'>
      <div className="App">
        <h1 className='fib'>welcome to fiberrr!!</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <form id="loginForm" onSubmit={handleLogin}>
            <h2 className='lo' style={{ marginRight: 700 }}>Login</h2><br></br>
            <label htmlFor="email">Email</label>
            <br />

            <input className='mn'
              type="text"
              id="email"
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value )}
              placeholder='Enter your email'
              required
            />
            <br></br>
            <br></br>

            <label htmlFor="password">Password</label>
            <br />

            <input
              className='ps'
              type="password"
              id="password"
              name="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter your password'
            />
            <br></br>
            <br></br>

            <div style={{ display: "flex" }}>
              <button style={{ width: 50, height: 30, color: "bluev" }} type="submit"><NavLink to="/home">Login</NavLink></button>
              <div style={{ marginTop: 10, marginLeft: 20, color: "blue" }}>
                <NavLink to="/adminLogin">(Admin)</NavLink>
              </div>
            </div>
            <br></br>
            <h3 style={{ fontSize: 20 }} className='dt'>Don't have an account?<br></br><NavLink to="/reg">Register</NavLink></h3>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
