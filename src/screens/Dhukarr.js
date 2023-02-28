import React, { useState } from 'react';

import TopNav from '../components/TopNav';

import dhukarr_english from '../assets/dkharr_english.png';
import dhukarr_yolngu from '../assets/dkharr_yolngu.png';


const Dhukarr = () => {

  //show in language or english?
  const [language, setLanguage] = useState(true)

  //when user clicks the language icon 
  const toggleLanguage = () => {
    setLanguage(!language);
  }

  return(
    <div className="container dictionaryScreen dhukarrScreen">

    <TopNav toggleLanguage={toggleLanguage} language={language} back noBorder title=""/>

          {/*<img src={dhukarr_english} usemap="#Map"/>
          <map name="Map">
          <area shape="poly" title="test" coords="498,1607,648,1591,752,1627,791,1729,779,1794,696,1856,549,1868,459,1827,406,1730,427,1658" href="#"/>
          </map>   
          */}
      
      <div className='contentContainer longImageHolder'>
        <img className='longImage' src={language ? dhukarr_yolngu : dhukarr_english}/>
        <div className="audioTrigger" id="audioTrigger1" style={{top: "828px", left:"480px", width:"270px", height: "210px"}}></div>
      </div>

      
 

    

    </div>
  )
}

export default Dhukarr;
