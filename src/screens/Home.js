import React from 'react';
import { useNavigate } from "react-router-dom";

import Tile from '../components/Tile';
import lipalipa from '../assets/lipalipa-strip.png';

const Home = props =>{

  const navigate = useNavigate();

  const chooseResourceHandler = (e) => {
    window.scrollTo(0, 0);
    navigate('/'+e);
  };

  return(

    <div className="container homeScreen">

        <div className="header bgstrip largerFont">Dhukarr ga Rom marŋgithinyaraw bala-räliyunmirr Yolŋuw ga Balandaw (Draft)</div>

        <div className="homeContent">

          <Tile id='dictionary' label='Balandaw gurraŋay dhäruk ga Yolŋukurr mayali: – a dictionary of English education and research terms for Yolŋu'
            onClick={()=>chooseResourceHandler('dictionary')}
          />

          <Tile id='children' label='Yolŋu Yothuw Dhukarr – the developmental pathway of a Yolŋu child'
            onClick={()=>chooseResourceHandler('dhukarr')}
          />

          <Tile id='auspathway' label='Australian education pathway'
            onClick={()=>chooseResourceHandler('auspathway')}
          />

          <Tile id='ceremony' label='Ceremony as a Yolŋu classroom'
            onClick={()=>alert('Coming soon!')}
          />

          

        </div>

        <div className="footer bgstrip"></div>

    </div>
  )
}

export default Home;
