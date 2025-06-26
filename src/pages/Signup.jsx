import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import logo from '../assets/logo.png';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', { email, password });
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    return (
        <div className="login-bg netflix-bg">
            <div className="login-card netflix-card">
                <img className="login-logo" src={logo} alt="Netflix Logo" />
                <h2 className="login-title">Sign Up</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Email or phone number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="login-btn" type="submit">Sign Up</button>
                </form>
                <p className="login-signup-text">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
                <div className="login-footer">
                    <p className="login-footer-text">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
            </div>
        </div>
    );
}

export default Signup; 