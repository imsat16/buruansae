import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import {useRouter} from 'next/router';

const Dashboard = () => {
  const [name, setName] = useState ('');
  const [token, setToken] = useState ('');

  useEffect (() => {
    refreshToken ();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get ('http://localhost:5000/token');
      setToken (response.data.accessToken);
      const decoded = jwt_decode (response.data.accessToken);
      console.log (decoded);
    } catch (error) {
        
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-5">
        <h1>Wellcome Back: to buruansae</h1>
      </div>
    </div>
  );
};

export default Dashboard;
