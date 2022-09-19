import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";


const Launch = () => {

  const navigate = useNavigate();

  const enterApp = (e) => {
    navigate('/home');
  };

  return(

      <div className="container launchScreen" onClick={enterApp}>
        <img src={logo} className="launchLogo" alt="Yalu logo"/>
      </div>

  )
}

export default Launch;
