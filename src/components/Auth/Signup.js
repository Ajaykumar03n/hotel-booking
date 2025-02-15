import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Auth.css';

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const [phone, setPhone] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                username,
                phone
            });
            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/hotel", { state: { id: email } });
            }
        } catch (error) {
            alert("Failed to sign up. Please try again.");
        }
    }

    return (
        <div className="form-container">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <input 
                    type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Phone" 
                    required 
                />
                <button type="submit" className="buttonsub">Sign Up</button>
            </form>
            <p>OR</p>
            <Link to="/">
                <button type="button" className="button1">Login Page</button>
            </Link>
        </div>
    );
}

export default Signup;
