import React, { useState } from 'react';


import { useNavigate } from "react-router-dom";
import dhukarr_english from '../assets/dkharr_english.png';
import previous from '../assets/back.png';


const Dhukarr = () => {

  const navigate = useNavigate();

  const goBack = (e) => {
    window.scrollTo(0, 0);
    navigate(-1)
  };

  

  return(
    <div className="container dictionaryScreen dhukarrScreen">

    <div className="leftHeader" onClick={goBack}>
            <div className="appHeaderImageFloat">
              <img src={previous} alt="Home" className="appHeaderIcon"/>
            </div>
          </div>

          {/*<img src={dhukarr_english} usemap="#Map"/>
          <map name="Map">
          <area shape="poly" title="test" coords="498,1607,648,1591,752,1627,791,1729,779,1794,696,1856,549,1868,459,1827,406,1730,427,1658" href="#"/>
          </map>   
          */}
      
      <div >
        <img  src={dhukarr_english}/>
        <div className="audioTrigger" id="audioTrigger1" style={{top: "828px", left:"480px", width:"270px", height: "210px"}}></div>
      </div>

      
 

    

    </div>
  )
}

export default Dhukarr;
