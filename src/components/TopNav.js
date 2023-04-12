import React from 'react';

import { useNavigate } from "react-router-dom";

import house from '../assets/home.png';
import previous from '../assets/back.png';
import search from '../assets/search.png';
import SoundPlayer from './SoundPlayer';

const TopNav = ({ toggleSearch, title, home, back, play, audio, noBorder, toggleLanguage, language }) => {

  const navigate = useNavigate();

  const returnHome = (e) => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  const goBack = (e) => {
    window.scrollTo(0, 0);
    navigate(-1)
  };

  //console.log(language)

  return(

    <div className={`${'appHeader bgstrip'} ${noBorder&&'noBorder'}`}>
      

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
              <img src={search} alt="Search" className="appHeaderIcon searchIcon"/>
              </div>
          </div>
        }
        
        {toggleLanguage &&
          <div className="rightHeader" >
            <label className="switch">
              <input type="checkbox" onChange={toggleLanguage} checked={language}/>
              <span className="slider round"></span>
            </label>
            <div className="switchLabel" onClick={toggleLanguage}>Yolngu</div>
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
