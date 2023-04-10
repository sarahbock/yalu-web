import React, { useState, useEffect } from 'react';

import TopNav from '../components/TopNav';

import dhukarr_english from '../assets/dkharr_english.png';
import dhukarr_yolngu from '../assets/dkharr_yolngu.png';
import SoundPlayer from '../components/SoundPlayer';

const Dhukarr = () => {

  const size = useWindowSize();

  const [audio1, setAudio1] = useState();


 

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


  //show in language or english?
  const [language, setLanguage] = useState(true)

  const audioSource = null;

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
      
      <div className='contentContainer'>

        <div className='introHolder padThin'>

          <div className='padThinner'>
            <h1>Yolŋu Yothuw Dhukarr ŋuthanaraw ga dharaŋanaraw. Ga nhaltjan gurruṯumirriy guŋga’yun dhu yothuny</h1>
            <h2 className='marginTop'>The Yolŋu child’s developmental pathway and ways that family monitor and support the child’s development. </h2>
            <h3 className='marginTop'>Colour key</h3>
          </div>

          <div className='blobRow'>
            <div className='blob' id='intro1Holder'>
              <div className='blobText blobBrown'>Ongoing ways that family support the child</div>
            </div>
            <div className='blob' id='intro2Holder'>
              <div className='blobText blobOrange'>Ways that family support the child just at this stage</div>
            </div>
            <div className='blob' id='intro3Holder'>
              <div className='blobText blobYellow'>What the child does - ongoing </div>
            </div>
            <div className='blob' id='intro4Holder'>
              <div className='blobText blobLight'>What the child does – just at this stage </div>
            </div>
          </div>

          <div className='blobRow'>
            <div className='blob' id='intro5Holder'>
              <div className='blobText blobGrey'>Yellow text – ways that family assess the child’s development</div>
            </div>
          </div>

          <div className='padThinner'>
            <p className='marginTop paddingBottom'>Yolŋu monitor and support the child’s development through watching and assessing how each child is progressing along their pathway and helping with what they need at the time – not expecting specific stages at specific ages like the Balanda system. </p>
          </div>
          
          
         


        </div>
      


         {/*
         <img className='longImage' src={language ? dhukarr_yolngu : dhukarr_english}/>
          <div className="audioTrigger" id="audioTrigger3" style={{top: "1630px", left:"550px", width:"50px", height: "50px"}}>
          <SoundPlayer source={require('../assets/mp3/recording3.mp3')}/>
        </div>

        <div className="audioTrigger" id="audioTrigger4" style={{top: "2000px", left:"550px", width:"50px", height: "50px"}}>
          <SoundPlayer source={require('../assets/mp3/recording4.mp3')}/>
        </div>
        
         */
         }

     
        
        
      </div>

      
 

    

    </div>
  )
}

export default Dhukarr;
