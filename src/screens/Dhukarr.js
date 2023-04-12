import React, { useState, useEffect } from 'react';

import TopNav from '../components/TopNav';


import SoundPlayer from '../components/SoundPlayer';
import Blob from '../components/Blob';
import Sidebar from '../components/Sidebar';

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

        {/*INTRODUCTION*/}

        <div className='bgHolder introHolder'>

          <div className='padThinner'>
            <h1>Yolŋu Yothuw Dhukarr ŋuthanaraw ga dharaŋanaraw. Ga nhaltjan dhu gurruṯumirriy guŋga’yun yothuny.</h1>
            <h2 className='marginTop'>The Yolŋu child’s developmental pathway and ways that family monitor and support the child’s development. </h2>
            <h3 className='marginTopLarge'>Colour Key</h3>
          </div>

          <div className='blobRow blobRowThin'>

            <Blob 
              id='01' 
              colour='brown'
              english='Ongoing ways that family support the child'
              language={language}
              />

            <Blob 
              id='02' 
              colour='orange'
              english='Ways that family support the child just at this stage'
              language={language}
              />

            <Blob 
              id='03' 
              colour='yellow'
              english='What the child does - ongoing'
              language={language}
              />

            <Blob 
              id='04' 
              colour='light'
              english='What the child does – just at this stage'
              language={language}
              />  

          </div>

          <div className='blobRow blobRowThin'>

          <Blob 
              id='05' 
              colour='grey'
              english='Yellow text – ways that family assess the child’s development'
              language={language}
              />

          </div>

          <div className='padThinner marginTop paddingBottom'>
            <p>
              { language ? 
                <>Yolŋuwal mäŋutjiy ŋuli nhäma ga dharaŋan nhaltjan ga yothu ŋuthan ga marŋgithirr – Yolŋuw guyaŋanhawuy dhuwal yaka rrambaŋi nhakun Balandaw.</> : 
                <>9Yolŋu monitor and support the child’s development through watching and assessing how each child is progressing along their pathway and helping with what they need at the time – not expecting specific stages at specific ages like the Balanda system.</>
              }
              <SoundPlayer source={require('../assets/dhukarr/mp3/recording9.mp3')}/>
            </p>
          </div>

          {/*ONGOING*/}

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>

            <div className='blobRow'>

            <Blob 
              id='8' 
              colour='brown'
              english='In the Yolŋu system, we all work together to care and support the child’s development.'
              yolngu='Dhuwal yothuw gakal yolŋuwal romŋur ŋanapurruŋgal djägany ŋuli räḻ-manapanmirr.'
              language={language}
              audio={true}
              />

            <Blob 
              id='3' 
              colour='yellow'
              english='The child knows what is best for their growth – when to sleep, eat, play (the child decides not the family).'
              yolngu='ŋayi yothu marŋgi nhaltjan ŋayi ŋuli galŋa-dhulŋithirr –  ŋorranharaw ga buḻ’yunaraw ga ŋaminiwu ŋulkthunaraw.'
              language={language}
              audio={true}
              />

            <Blob 
              id='5' 
              colour='yellow'
              english='Gurruṯu (kinship connection) testing—teaching—testing—teaching routines continue all the time until the child has demonstrated strong understanding of kinship concepts and their own relationship.'
              yolngu='Gurruṯuny ŋanapurr ŋuli marŋgi- gurrapan ŋunhi yothuny ŋayi ŋuli marrtji ŋuthan. Ga bulu ŋanapurr ŋuli walalany birrka’yun nhä ŋayi ŋunhi gurruṯu nhanŋu yothuw bitjan bili.'
              language={language}
              audio={true}
              />

              </div>

              <div className='blobRow'>

                <Blob 
                  id='7' 
                  colour='brown'
                  english='Grandparents support and offer advice to mum and dad and rest of the family so they understand how to care for the child.'
                  yolngu='Märiy ga ŋathiy ŋuli guŋga’yun ga gurrupan dharaŋanaraw bäpaw ga ŋaṉḏiw  ga wiripuny mala gurruṯumirriw märr walal dhu dharaŋan nhaltjan walal dhu djäga yothuw.'
                  language={language}
                  audio={true}
                  />

                <Blob 
                  id='4' 
                  colour='grey'
                  english='Family constantly observe and monitor how the child is developing in all areas (identity, skills, knowledge, character etc) - ‘watching what knowledge the child has caught’ (ref).'
                  yolngu='Gurruṯumirriy ŋuli dhuwurr nhäma yothuny - nhaltjan ŋayi ŋuli romgu ga gakalwu marŋgithirr bitjan bili.'
                  language={language}
                  audio={true}
                  />

                <Blob 
                  id='6' 
                  colour='yellow'
                  english='The child decides what they want or don’t want – they have autonomy – family don’t force them or hurt their feelings by refusing to give them what they want. '
                  yolngu='Yothuw ŋayaŋu nhaku ŋayi djäl ga nhaku malaŋuw – ŋayi ŋunhi rumbal waṯaŋu – gurruṯumirriy ŋuli yaka gurkuryun wo ŋayaŋu wutthun yothuny.'
                  language={language}
                  audio={true}
                  />

              </div>

            </div>

             {/*SIDE BAR - ONGOING*/}

             <Sidebar 
              id='0' 
              english='Things that are ongoing throughout the dhukarr'
              yolngu='Dhuwandja dhäwu mala baḏaknha ŋuli bitjana bili  marrtji weyinŋumirra '
              language={language}
              />

          </div> 

        </div>
      

       {/*SECTION 1*/}

        <a name="section1" href='section1' id="section1"></a>
        
        <div className='bgHolder section1Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>

            <Blob 
              id='11' 
              colour='brown'
              english='Father and others provide healthy Yolŋu food for the pregnant woman e.g. shellfish, fish, kangaroo, some kinds of stingray, white clay, yams, wild fruits.'
              yolngu='Bäpa’mirriŋu ga wiripu gurruṯumirriy mala ŋuli märram Yolŋuw ŋatha yothumirriw ŋaṉḏimirriŋuw.'
              language={language}
              audio={true}
              />

            <div className='dhukarrSectionContentRow'>

              <Blob 
                id='12' 
                colour='brown'
                english='Pregnant woman can walk around and work a little bit.'
                yolngu='Miyalk dhu yothumirriny ŋayi dhu ga gaŋga djäma ga marrtji.'
                language={language}
                audio={true}
                style={{paddingTop: '40px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                />

              <Blob 
                id='14' 
                colour='orange'
                english='Family observe and recognise early signs that the woman is pregnant.'
                yolngu='Gurruṯumirriy ŋuli nhäma ga marŋgithirr ŋunhi miyalknha ŋayi yothumirra.'
                language={language}
                audio={true}
                style={{ position: 'relative', left: '20px', paddingTop: '50px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                />

              </div>

            <Blob 
              id='13' 
              colour='brown'
              english='Yolŋu have guidelines for avoiding certain foods to protect the baby from harmful effects  e.g. Yirritja turtle, some kinds of stingray, young sharks, hot tea, eggs of seafood – can cause physical disability.'
              yolngu='Rom ga ŋorra yaka dhu ḻuka ŋatha bawalamirr yothumirriy miyalkthu märr ŋayi dhu yothu yaka rirrikthun ga yalŋgiyirr.'
              language={language}
              audio={true}
              />

            </div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>

          <Blob 
            id='15' 
            colour='yellow'
            english='Soon after conception, the spirit of the baby communicates with a family member in a dream or through a sign e.g. unusual behaviour of an animal that is the same moiety and totem of the child – the person who gets the message has a lifelong strong connection to that child - like a ‘godparent’.'
            yolngu='Ŋaḻapaḻyu Yolŋuy ŋuli dhiṉ’thun wuŋiḻi wo mawa ŋunhi ŋayi yothu yutuŋgurrpuy Yolŋuwuŋ ga malthunawuy.'
            language={language}
            link='http://growingupyolngu.com.au/index.cfm?fuseaction=page&p=231&l=1&id=71'
            audio={true}
            />

          <Blob 
            id='16' 
            colour='yellow'
            english='Mother, father and other family members communicate with the baby during pregnancy and the baby responds
            e.g. responding (kicking) when family talk to the baby; responding to what the mother is eating; telling what they want through movement, staying still when listening to a story ; family touch the mother’s body and talk to the baby about wishes and hopes for the baby’s future; the baby feels comfort.'
            yolngu='Ŋaṉdi’mirriŋuwal gulunlil walal ŋuli waŋa – bäpa’mirriŋuny ga wiripuny gurruṯu’mirriny mala ŋuli waŋa yothuwal ga yothuy ŋuli dhäkay-ŋäma bala buku-ruŋinmaram djagadjaga’yuna.'
            language={language}
            link='http://growingupyolngu.com.au/index.cfm?fuseaction=page&p=231&l=1&id=71'
            audio={true}
            />

            </div>

            <Sidebar 
              id='1' 
              english='Pregnancy'
              yolngu='Yothumirriw miyalkku gakal'
              language={language}
              />

          </div> 

        </div>

        {/*SECTION 2*/}

        <a name="section2" href='section2' id="section2"></a>

        <div className='bgHolder section2Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>

            <Blob 
              id='18' 
              colour='brown'
              english='Family stay close to the mother, talk to her and encourage her.'
              yolngu='Gurruṯumirr ŋuli nhina galki yothumirriwal miyalkkal, ga guŋga’yun ŋanya waŋa.  '
              language={language}
              audio={true}
              style={{position: 'relative', left: '-30px', top:'-20px'}}
              />

            <div className='dhukarrSectionContentRow'>

              <Blob 
                id='19' 
                colour='orange'
                english='Family talk to encourage the baby to come when the time is right to be born.'
                yolngu='Gurruṯumirr ŋuli ga waŋa yothuwal boṉdi’yun wäŋaw nhänharaw.'
                language={language}
                audio={true}
                style={{position: 'relative', left: '20px', top:'-20px', paddingTop: '40px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                />

              <Blob 
                id='20' 
                colour='orange'
                english='Mother walks a lot to encourage the baby to come.'
                yolngu='Ŋäṉḏimirriŋu ŋuli ga marrtjimarrtji märr galkikum yothuny dhawal- guyaŋanharaw.'
                language={language}
                audio={true}
                style={{ position: 'relative', left: '40px', top:'-30px', paddingTop: '50px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                />

              </div>

            </div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>

            <Blob 
            id='21' 
            colour='light'
            english='Baby kicks and moves down, giving the mother back pain, to show the time is close - the baby is ready to come out and be with the mother.'
            yolngu='Yothuy ga dhumurrdhumurryun guḻun ŋaṉḏi’mirriŋuny ga ḏiltjiŋur ŋaraka ŋuli ŋäṉḏi’mirriŋuny nhära ŋunhiyin ŋuli maŋutji-lakaram yothuny gurku’yunhawuy.'
            language={language}
            audio={true}
            style={{marginLeft:'20px' }}
            />


            </div>

            

            <Sidebar 
              id='2' 
              english='When it’s time to be born'
              yolngu='Yothuw walu galki ŋayi dhu wäŋa-nhäman'
              language={language}
              />

          </div> 

        </div>

        {/*SECTION 3*/}

        <a name="section3"  href='section3' id="section3"></a>

        <div className='bgHolder section3Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='3' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 4*/}

         <a name="section4" href='section4' id="section4"></a>

        <div className='bgHolder section4Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='4' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 5*/}

         <a name="section5" href='section5' id="section5"></a>

        <div className='bgHolder section5Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='5' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 6*/}

         <a name="section6" href='section6' id="section6"></a>

        <div className='bgHolder section6Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='6' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 7*/}

         <a name="section7" href='section7' id="section7"></a>

          <div className='bgHolder section7Holder'>

            <div className='dhukarrSection'>

              <div className='dhukarrSectionContent'>Left column</div>
              
              <div className='dhukarrSectionMiddle'></div>

              <div className='dhukarrSectionContent'>Right column</div>

              

              <Sidebar 
              id='7' 
              english=''
              yolngu=''
              language={language}
              />

            </div> 

          </div>

           {/*SECTION 8*/}

        <a name="section8" href='section8' id="section8"></a>

        <div className='bgHolder section8Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='8' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 9*/}

         <a name="section9" href='section9' id="section9"></a>

          <div className='bgHolder section9Holder'>

            <div className='dhukarrSection'>

              <div className='dhukarrSectionContent'>Left column</div>
              
              <div className='dhukarrSectionMiddle'></div>

              <div className='dhukarrSectionContent'>Right column</div>

              

              <Sidebar 
              id='9' 
              english=''
              yolngu=''
              language={language}
              />

            </div> 

          </div>

           {/*SECTION 10*/}

        <a name="section10" href='section10' id="section10"></a>

        <div className='bgHolder section10Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='10' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 11*/}

         <a name="section11" href='section11' id="section11"></a>

          <div className='bgHolder section11Holder'>

            <div className='dhukarrSection'>

              <div className='dhukarrSectionContent'>Left column</div>
              
              <div className='dhukarrSectionMiddle'></div>

              <div className='dhukarrSectionContent'>Right column</div>

              

              <Sidebar 
              id='11' 
              english=''
              yolngu=''
              language={language}
              />

            </div> 

          </div>

           {/*SECTION 12*/}

        <a name="section12" href='section12' id="section12"></a>

        <div className='bgHolder section12Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            

            <Sidebar 
              id='12' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>

         {/*SECTION 13*/}

         <a name="section13" href='section13' id="section13"></a>

          <div className='bgHolder section13Holder'>

            <div className='dhukarrSection'>

              <div className='dhukarrSectionContent'>Left column</div>
              
              <div className='dhukarrSectionMiddle'></div>

              <div className='dhukarrSectionContent'>Right column</div>

              

              <Sidebar 
              id='13' 
              english=''
              yolngu=''
              language={language}
              />

            </div> 

          </div>

           {/*SECTION 14*/}

        <a name="section14" href='section14' id="section14"></a>

        <div className='bgHolder section14Holder'>

          <div className='dhukarrSection'>

            <div className='dhukarrSectionContent'>Left column</div>
            
            <div className='dhukarrSectionMiddle'></div>

            <div className='dhukarrSectionContent'>Right column</div>

            <Sidebar 
              id='14' 
              english=''
              yolngu=''
              language={language}
              />

          </div> 

        </div>
     
        
        
      </div>

      
 

    

    </div>
  )
}

export default Dhukarr;
