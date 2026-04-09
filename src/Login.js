import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Lucide Icons
import { Mail, Lock, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>

      <Link to='/' className='login__logo'>
        <h2 className='login__logoTitle'>Cartify</h2>
      </Link>

      <div className='login__container'>
        <h1>Welcome Back</h1>
        <p className='login__subtitle'>Sign in to continue shopping</p>

        <form>

          {/* EMAIL */}
          <div className='input__group'>
            <Mail className='input__icon' size={18} />
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className='input__group'>
            <Lock className='input__icon' size={18} />
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button
            type='submit'
            className='login__signInButton'
            onClick={signIn}
          >
            Sign In <ArrowRight size={16} />
          </button>

        </form>

        <p className='login__terms'>
          By signing in, you agree to Cartify’s Terms & Conditions.
        </p>

        <button
          className='login__registerButton'
          onClick={register}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;