import React, { useState } from 'react';
import axios from 'axios';

const NewPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmPassword && password.length >= 8 && password.length <= 20) {
            const token = new URLSearchParams(window.location.search).get('token');
            const email = new URLSearchParams(window.location.search).get('email');
            console.log(token);
            console.log(email);
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/new-pass', {
                    token,
                    email,
                    password,
                });
                setConfirmPassword('');
                setPassword('');
                alert(response.data.message);
                window.location = 'http://localhost:3000/sign-in'
            } catch (error) {
                alert(error.response.data.message);
            }
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewPass;
