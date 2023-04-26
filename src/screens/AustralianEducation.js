import React, { useState } from 'react';

import TopNav from '../components/TopNav';


import SoundPlayer from '../components/SoundPlayer';
import Blob from '../components/Dhukarr/Blob';
import BlobArrow from '../components/Dhukarr/BlobArrow';
import Anchor from '../components/Dhukarr/Anchor';
import SectionHolder from '../components/Dhukarr/SectionHolder';
import DhukarrSection from '../components/Dhukarr/DhukarrSection';
import DhukarrContent from '../components/Dhukarr/DhukarrContent';
import DhukarrMiddle from '../components/Dhukarr/DhukarrMiddle';
import Sidebar from '../components/Dhukarr/Sidebar';

const AustralianEducation = () => {

 //show in language or english?
 const [language, setLanguage] = useState(true)


 //when user clicks the language icon 
 const toggleLanguage = () => {
   setLanguage(!language);
 }



  return(
    <div className="container dictionaryScreen dhukarrScreen auspathwayScreen">

    <TopNav toggleLanguage={toggleLanguage} language={language} back noBorder title="Australian Education System"/>

      <div className='contentContainer'>

        {/*INTRODUCTION*/}

        <SectionHolder id='0'>

          <div className='padThinner'>
            <h1>Australian Education System</h1>
            <h2 className='marginTop'>Djamrrkuliw' dharananaraw balandaw dhukarrwu marngithinyaraw</h2>
          </div>

          {/*AGES 0-3.5*/}

          <DhukarrSection>

              <DhukarrContent orientation="row">

                <DhukarrContent orientation="column">

                  <Blob 
                    animation={false}
                    id='1' 
                    colour='brown'
                    english='BabyHub offering support to mothers and their babies through a variey of integrated programs'
                    language={language}
                    style={{position:'relative', top:'20px'}}
                    />
                    
                </DhukarrContent>

                <Blob 
                  animation={false}
                  id='2' 
                  colour='brown'
                  english='FaFT'
                  language={language}
                  style={{position:'relative', top:'20px'}}
                  />

                <DhukarrContent orientation="column">

                  <Blob 
                    animation={false}
                    id='3' 
                    colour='brown'
                    english='East Arnhem supporting through their Childcare play based program'
                    language={language}
                    style={{position:'relative', top:'20px'}}
                    />

                </DhukarrContent>
         
              </DhukarrContent>

             <Sidebar background={false}  
              id='0' 
              english='Ages 0 - 3.5 years'
              yolngu=''
              language={language}
              />

          </DhukarrSection> 

        </SectionHolder>
      

       {/*Ages 3.5-5 years*/}

       <SectionHolder id='1'>

            <DhukarrSection>

              <DhukarrContent orientation="column">

                <Blob 
                  animation={true}
                  id='4' 
                  colour='white'
                  english='FAST program helps support families and children through a variety of family centric programs'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'20px' }}
                  />


              </DhukarrContent>

              <Blob 
                animation={true}
                id='5' 
                colour='transparent'
                english='Preschool'
                yolngu=''
                language={language}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <Blob 
                animation={true}
                id='6' 
                colour='white'
                english=''
                yolngu=''
                language={language}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />



              <Sidebar background={true}  
                id='1' 
                english='Ages 3.5-5 years'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


        {/*Ages 5-6 years*/}

        <Anchor id='2'/>

        <SectionHolder id='2'>

            <DhukarrSection>

              <Blob 
                animation={true}
                id='7' 
                colour='transparent'
                english='Transition'
                yolngu=''
                language={language}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <Sidebar background={true}  
                id='2' 
                english='Ages 5-6 years'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>

        {/*Ages 6-9 years (grade 1-4)*/}

        <Anchor id='3'/>

         <SectionHolder id='3'>

            <DhukarrSection>

              <Blob 
                animation={true}
                id='8' 
                colour='transparent'
                english='Primary years'
                yolngu=''
                language={language}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <Sidebar background={true}  
                id='3' 
                english='Ages 6-9 years (grade 1-4)'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*Ages 10-12 years (grade 5-7)*/}

         <Anchor id='4'/>

         <SectionHolder id='4'>

            <DhukarrSection>

              <Blob 
                animation={true}
                id='9' 
                colour='transparent'
                english='Middle years'
                yolngu=''
                language={language}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <Sidebar background={true}  
                id='4' 
                english='Ages 10-12 years (grade 5-7)'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*Ages 13-17 years (grade 8-12)*/}

         <Anchor id='5'/>

         <SectionHolder id='5'>

          <DhukarrSection>

            <Blob 
              animation={true}
              id='10' 
              colour='transparent'
              english='Secondary years'
              yolngu=''
              language={language}
              audio={false}
              style={{position:'relative', left:'20px' }}
              />

            <Sidebar background={true}  
              id='5' 
              english='Ages 13-17 years (grade 8-12)'
              yolngu=''
              language={language}
              />

          </DhukarrSection>

          </SectionHolder>


         {/*SECTION 6*/}

         <Anchor id='6'/>

         <SectionHolder id='6'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                
                <Blob 
                  animation={true}
                  id='11' 
                  colour='transparent'
                  english='Certificate 1'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />
                  
                <Blob 
                  animation={true}
                  id='12' 
                  colour='transparent'
                  english='Certificate 2'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />

                <Blob 
                  animation={true}
                  id='13' 
                  colour='transparent'
                  english='Certificate 3'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />

                <Blob 
                  animation={true}
                  id='14' 
                  colour='transparent'
                  english='Certificate 4'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'20px' }}
                  />

                <Blob 
                  animation={true}
                  id='15' 
                  colour='transparent'
                  english='Advanced Diploma'
                  yolngu=''
                  language={language}
                  audio={false}
                  style={{position:'relative', left:'20px' }}
                  />


              </DhukarrContent>

            
            </DhukarrSection>
            
           </SectionHolder>
        
      </div> 

    </div>
  )
}

export default AustralianEducation;
