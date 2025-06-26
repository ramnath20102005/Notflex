import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import logo from '../assets/logo.png';

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            setIsAuthenticated(true);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="login-bg netflix-bg">
            <div className="login-card netflix-card">
                <img className="login-logo" src={logo} alt="Netflix Logo" />
                <h2 className="login-title">Sign In</h2>
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
                    <button className="login-btn" type="submit">Sign In</button>
                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
                        </label>
                        <a href="#" className="need-help">Need help?</a>
                    </div>
                </form>
                <p className="login-signup-text">
                    New to Netflix? <Link to="/signup">Sign up now</Link>
                </p>
                <div className="login-footer">
                    <p className="login-footer-text">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
            </div>
        </div>
    );
}

export default Login; 