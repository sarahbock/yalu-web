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
            <h1>Yolŋu Yothuw Dhukarr ŋuthanaraw ga dharaŋanaraw. Ga nhaltjan dhu gurruṯumirriy guŋga’yun yothuny.</h1>
            <h2 className='marginTop'>The Yolŋu child’s developmental pathway and ways that family monitor and support the child’s development. </h2>
            <h3 className='marginTopLarge'>Colour Key</h3>
          </div>

          <div className='blobRow blobRowThin'>
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

          <div className='blobRow blobRowThin'>
            <div className='blob' id='intro5Holder'>
              <div className='blobText blobGrey'>Yellow text – ways that family assess the child’s development</div>
            </div>
          </div>

          <div className='padThinner'>
            <p className='marginTop paddingBottom'>Yolŋu monitor and support the child’s development through watching and assessing how each child is progressing along their pathway and helping with what they need at the time – not expecting specific stages at specific ages like the Balanda system. </p>
          </div>

          {/*ONGOING*/}

          <div className='blobRow'>

            <div className='blob' id='blob8Holder'>
              <div className='blobText blobBrown'>
                <span className='englishText'>8In the Yolŋu system, we all work together to care and support the child’s development.</span>
                <span className='yolnguText'>Dhuwal yothuw gakal yolŋuwal romŋur ŋanapurruŋgal djägany ŋuli räḻ-manapanmirr.  </span>
              </div>
            </div>

            <div className='blob' id='blob3Holder'>
              <div className='blobText blobYellow'>
              <span className='englishText'>3The child knows what is best for their growth – when to sleep, eat, play (the child decides not the family). </span>
                <span className='yolnguText'>Dhuwal yothuw gakal yolŋuwal romŋur ŋanapurruŋgal djägany ŋuli räḻ-manapanmirr  </span>
              </div>
            </div>

            <div className='blob' id='blob5Holder'>
              <div className='blobText blobYellow'>
              <span className='englishText'>5Gurruṯu (kinship connection) testing—teaching—testing—teaching routines continue all the time until the child has demonstrated strong understanding of kinship concepts and their own relationship</span>
                <span className='yolnguText'>Gurruṯuny ŋanapurr ŋuli marŋgi- gurrapan ŋunhi yothuny ŋayi ŋuli marrtji ŋuthan. Ga bulu ŋanapurr ŋuli walalany birrka’yun nhä ŋayi ŋunhi gurruṯu nhanŋu yothuw bitjan bili. </span>
              </div>
            </div>

          </div>
          
          <div className='blobRow'>

            <div className='blob' id='blob7Holder'>
              <div className='blobText blobBrown'>
                <span className='englishText'>7Grandparents support and offer advice to mum and dad and rest of the family so they understand how to care for the child.
</span>
                <span className='yolnguText'>Märiy ga ŋathiy ŋuli guŋga’yun ga gurrupan dharaŋanaraw bäpaw ga ŋaṉḏiw  ga wiripuny mala gurruṯumirriw märr walal dhu dharaŋan nhaltjan walal dhu djäga yothuw.    </span>
              </div>
            </div>

            <div className='blob' id='blob4Holder'>
              <div className='blobText blobGrey'>
              <span className='englishText'>4Family constantly observe and monitor how the child is developing in all areas (identity, skills, knowledge, character etc) - ‘watching what knowledge the child has caught’ (ref)
 </span>
                <span className='yolnguText'>Gurruṯumirriy ŋuli dhuwurr nhäma yothuny - nhaltjan ŋayi ŋuli romgu ga gakalwu marŋgithirr bitjan bili  </span>
              </div>
            </div>

            <div className='blob' id='blob6Holder'>
              <div className='blobText blobYellow'>
              <span className='englishText'>6The child decides what they want or don’t want – they have autonomy – family don’t force them or hurt their feelings by refusing to give them what they want. 
</span>
                <span className='yolnguText'>Yothuw ŋayaŋu nhaku ŋayi djäl ga nhaku malaŋuw – ŋayi ŋunhi rumbal waṯaŋu – gurruṯumirriy ŋuli yaka gurkuryun wo ŋayaŋu wutthun yothuny  </span>
              </div>
            </div>

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
