import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Parts/Footer';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/burgerx/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.success) {
                alert("Login successful!");
                // Redirect or store token/session here
            } else {
                alert("Login failed: " + data.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Login</button>

                            <Link to="/Adminlogin" className="btn btn-primary mt-3">Admin Login</Link>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default LoginForm;
