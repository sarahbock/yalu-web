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

        <div className="header bgstrip largerFont">Dhukarr ga Rom Marŋgithinyaraw Bala-räliyunmirr Yolŋuw ga Balandaw</div>

        <div className="homeContent">

          <Tile id='dictionary' label='Balandaw Gurraŋay Dhäruk - Dictionary of English terms for Yolŋu'
            onClick={()=>chooseResourceHandler('dictionary')}
          />

          <Tile id='children' label='Yolŋu Yothuw Dhukarr – Yolŋu Developmental Pathway'
            onClick={()=>chooseResourceHandler('dhukarr')}
          />

          <Tile id='auspathway' label='Australian Education Pathway'
            onClick={()=>chooseResourceHandler('auspathway')}
          />

          <Tile id='ceremony' label='Ceremony as a Yolŋu Classroom'
            onClick={()=>chooseResourceHandler('ceremony')}
          />

          

        </div>

        <div className="footer bgstrip"></div>

    </div>
  )
}

export default Home;
