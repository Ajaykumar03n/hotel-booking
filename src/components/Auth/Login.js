import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Auth.css';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/", { email, password });
            if (response.data === "exist") {
                history("/hotel", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details. Please try again.");
        }
    }

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submit}>
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
                <button type="submit" className="buttonsub">Login</button>
            </form>
            <p>OR</p>
            <Link to="/signup">
                <button type="button" className="button1">Signup Page</button>
            </Link>
        </div>
    );
}

export default Login;
