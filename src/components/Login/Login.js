import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const login = (e) => {
        console.log(auth)
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                console.log(auth)
                navigate("/")
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    console.log(auth)
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="logo" />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
            <p className="login__footer">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}

export default Login
