import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        fetchSessionData();
    }, []);

    const fetchSessionData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/obtainers/login');
            const obtainerId = response.data.obtainer_id;
            alert(obtainerId);
        } catch (error) {
            alert('Error: Cannot fetch session');
        }
    };

    return (
        <div className="styleHome">
            <h1>Home</h1>
        </div>
    );
};

export default Home;
