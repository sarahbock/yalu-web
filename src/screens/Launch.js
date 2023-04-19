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

      <div className="container" onClick={enterApp}>

        <div className="header bgstrip largerFont">Dhukarr ga Rom marŋgithinyaraw bala-räliyunmirr Yolŋuw ga Balandaw (Draft)</div>

        <div className="centeredContent">
          <img src={logo} className="launchLogo" alt="Yalu logo"/>
          <div className="launchClick">
            Click here
            <img src={click} className="launchClickImage" alt="Click"/>
          </div>
        </div>

        <div className="footer bgstrip largerFont">Understanding Yolŋu and Balanda education pathways and systems - both ways (Draft)</div>

      </div>

  )
}

export default Launch;
