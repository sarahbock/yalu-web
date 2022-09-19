import React from 'react';
import { useNavigate } from "react-router-dom";

import Tile from '../components/Tile';

const Home = props =>{

  const navigate = useNavigate();

  const chooseResourceHandler = (e) => {
    window.scrollTo(0, 0);
    navigate('/dictionary');
  };

  return(

    <div className="container homeScreen">

        <Tile id='dictionary' label='Dictionary'
          onClick={chooseResourceHandler}
        />

        <Tile id='children' label='Child pathways'
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
  )
}

export default Home;
