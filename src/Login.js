import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect after login
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect after register
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className='login__logo'>
          <h2 className='login__logoTitle'>Cartify Login</h2>
        </div>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='login__signInButton'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Cartify's Conditions of Use & Sale.
          Please see our Privacy Notice, Cookies Notice, and Interest-Based Ads Notice.
        </p>

        <button
          className='login__registerButton'
          onClick={register}
        >
          Create your Cartify Account
        </button>
      </div>
    </div>
  );
}

export default Login;
