import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";
import {studentData} from "../assets/data";
import { useNavigate } from "react-router-dom";
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";

const LoginPage = () => {
  const [loginName, setLoginName] = useState('');
  const [error, setError] = useState('');
  const [loggedInUserId] = useState(() => window.localStorage.getItem('logged-in-user') || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUserId) {
      navigate('/profile');
    }
  }, [loggedInUserId, navigate]);


  const login = (name) => {
    const loggedUser = studentData.find(user => user.name.toLowerCase() === name.trim().toLowerCase());

    if (loggedUser?.id) {
      window.localStorage.setItem('logged-in-user', loggedUser.id);
      setError('');
      navigate('/profile');
    } else {
      setError('User Not Found!');
    }
  }


  return (
    <>
      <ExamplesNavbar coloredNav />
      <div className="login-container">
        <label className='title' htmlFor="loginInput">First and Last Name</label>
        <input style={{width: '300px', padding: '5px 10px'}} type="text" id="loginInput" value={loginName} onChange={e => setLoginName(e.target.value)} placeholder="Please enter your full name" />
        {error && <h4 style={{color: 'red'}}>{error}</h4>}
        <Button color="info" onClick={() => login(loginName)}>Login</Button>
      </div>
    </>
  )
}

export default LoginPage;
