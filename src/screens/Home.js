import React from 'react';
import { useNavigate } from "react-router-dom";

import Tile from '../components/Tile';

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

          <Tile id='dictionary' label='Balandaw gurraŋay dhäruk - Yolŋukurr mayali'
            onClick={()=>chooseResourceHandler('dictionary')}
          />

          <Tile id='children' label='Yolŋu Yothuw Dhukarr – Yolŋu Developmental Pathway'
            onClick={()=>chooseResourceHandler('dhukarr')}
          />

          <Tile id='auspathway' label='Australian Education Pathway'
            onClick={()=>chooseResourceHandler('auspathway')}
          />

          <Tile id='ceremony' label='Ceremony as a Yolŋu classroom'
            onClick={()=>chooseResourceHandler('ceremony')}
          />

          

        </div>

        <div className="footer bgstrip"></div>

    </div>
  )
}

export default Home;
