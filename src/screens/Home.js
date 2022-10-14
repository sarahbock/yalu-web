import React from 'react';
import { useNavigate } from "react-router-dom";

import Tile from '../components/Tile';
import lipalipa from '../assets/lipalipa-strip.png';

const Home = props =>{

  const navigate = useNavigate();

  const chooseResourceHandler = (e) => {
    window.scrollTo(0, 0);
    navigate('/dictionary');
  };

  return(

    <div className="container homeScreen">

        <div className="header bgstrip">Dhukarr ga Rom marŋgithinyaraw bala-räliyunmirr Yolŋuw ga Balandaw</div>

        <div className="homeContent">

          <Tile id='dictionary' label='Dictionary'
            onClick={chooseResourceHandler}
          />

          <Tile id='children' label='Child development pathway'
            onClick={()=>alert('In development')}
          />

          <Tile id='blank' label='Coming'
            onClick={()=>alert('Coming soon')}
          />

          <Tile id='blank' label='Coming'
            onClick={()=>alert('Coming soon')}
          />

          <Tile id='blank' label='Coming'
            onClick={()=>alert('Coming soon')}
          />

          <Tile id='blank' label='Coming'
            onClick={()=>alert('Coming soon')}
          />

        </div>

        <div className="footer bgstrip"></div>

    </div>
  )
}

export default Home;
