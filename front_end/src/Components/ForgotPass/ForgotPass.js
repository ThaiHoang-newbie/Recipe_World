import React, { useState } from 'react';
import './ForgotPass.css';
import axios from 'axios';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/check-exists',
                { email }
            );
            if (response.data.message === 'Registered') {
                try {
                    const resetResponse = await axios.post(
                        'http://127.0.0.1:8000/api/enter-email',
                        { email }
                    );
                    if (resetResponse.status === 200) {
                        setMessage('The reset link has been sent to your email!');
                        setEmail("");
                    }
                } catch (error) {
                    setMessage('Unable to send the reset password link');
                }
            } else {
                setMessage('This email is not registered');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('This email is not registered');
            } else {
                setMessage('An error occurred');
            }
        }
    };

    return (
        <div className="form-gap">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h3>
                                        <i className="fa-solid fa-lock fa-4x" />
                                    </h3>
                                    <h2 className="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <form
                                            id="register-form"
                                            role="form"
                                            autoComplete="off"
                                            className="form"
                                            method="post"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-envelope color-blue" />
                                                    </span>
                                                    <input
                                                        id="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                        name="email"
                                                        placeholder="Email address"
                                                        className="form-control"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg btn-primary btn-block"
                                                >
                                                    Reset Password
                                                </button>
                                            </div>
                                            {message && <p>{message}</p>}
                                            <input
                                                type="hidden"
                                                className="hide"
                                                name="token"
                                                id="token"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
