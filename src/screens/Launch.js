import React from 'react';
import logo from '../assets/logo2.png';
import { useNavigate } from "react-router-dom";
import click from '../assets/click.png';

const Launch = () => {

  const navigate = useNavigate();

  const enterApp = (e) => {
    navigate('/home');
  };

  return(

      <div className="container" onClick={enterApp}>

        <div className="header bgstrip largerFont">Dhukarr ga Rom marŋgithinyaraw bala-räliyunmirr Yolŋuw ga Balandaw (Draft)</div>

        <div className="centeredContent">
          <img src={logo} className="launchLogo" alt="Yalu logo"/>
          <div className="launchClick">
            Click here
            <img src={click} className="launchClickImage" alt="Click"/>
          </div>
        </div>

        <div className="footer bgstrip largerFont">Understanding Yolŋu and Balanda Education Pathways and Systems - Both Ways (Draft)</div>

      </div>

  )
}

export default Launch;
