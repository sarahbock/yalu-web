import React from 'react';

import { useNavigate } from "react-router-dom";

import home from '../assets/home.png';
import search from '../assets/search.png';

const TopNav = ({ toggleSearch }) => {

  const navigate = useNavigate();

  const returnHome = (e) => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return(

    <div className="appHeader">

        <div className="leftHeader" onClick={returnHome}>
          <div className="appHeaderImage">
            <img src={home} alt="Home" class="appHeaderIcon"/>
          </div>
        </div>

        <div className="appHeaderTitle">Dictionary</div>

        <div className="rightHeader" onClick={toggleSearch}>
          <div className="appHeaderImage">
            <img src={search} alt="Search" class="appHeaderIcon"/>
          </div>
        </div>

      </div>
  )
}

export default TopNav;
