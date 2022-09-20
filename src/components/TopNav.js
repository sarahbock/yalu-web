import React from 'react';

import { useNavigate } from "react-router-dom";

import house from '../assets/home.png';
import previous from '../assets/back.png';
import search from '../assets/search.png';
import SoundPlayer from './SoundPlayer';

const TopNav = ({ toggleSearch, title, home, back, play, audio }) => {

  const navigate = useNavigate();

  const returnHome = (e) => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  const goBack = (e) => {
    window.scrollTo(0, 0);
    navigate(-1)
  };

  return(

    <div className="appHeader">

        {home &&
          <div className="leftHeader" onClick={returnHome}>
            <div className="appHeaderImage">
              <img src={house} alt="Home" className="appHeaderIcon"/>
            </div>
          </div>
        }

        {back &&
          <div className="leftHeader" onClick={goBack}>
            <div className="appHeaderImage">
              <img src={previous} alt="Home" className="appHeaderIcon"/>
            </div>
          </div>
        }

        <div className="appHeaderTitle">{title}</div>

        {toggleSearch &&
          <div className="rightHeader" onClick={toggleSearch}>
            <div className="appHeaderImage">
              <img src={search} alt="Search" className="appHeaderIcon"/>
              </div>
          </div>
        }

        {play &&
          <div className="rightHeader" >
            <div className="appHeaderImage">
              <SoundPlayer source={audio}/>
              </div>
          </div>
        }

      </div>
  )
}

export default TopNav;
