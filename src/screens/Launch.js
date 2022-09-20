import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import click from '../assets/click.png';

const Launch = () => {

  const navigate = useNavigate();

  const enterApp = (e) => {
    navigate('/home');
  };

  return(

      <div className="container launchScreen" onClick={enterApp}>
        <img src={logo} className="launchLogo" alt="Yalu logo"/>
        <div className="launchTitle">
          Click here
          <img src={click} className="launchClick" alt="Click"/>
        </div>
      </div>

  )
}

export default Launch;
