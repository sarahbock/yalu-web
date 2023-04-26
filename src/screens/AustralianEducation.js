import React, { useState } from 'react';

import TopNav from '../components/TopNav';


import SoundPlayer from '../components/SoundPlayer';
import Blob from '../components/Dhukarr/Blob';
import BlobText from '../components/Dhukarr/BlobText';
import BlobArrow from '../components/Dhukarr/BlobArrow';
import Anchor from '../components/Dhukarr/Anchor';
import SectionHolder from '../components/Dhukarr/SectionHolder';
import DhukarrSection from '../components/Dhukarr/DhukarrSection';
import DhukarrContent from '../components/Dhukarr/DhukarrContent';
import DhukarrMiddle from '../components/Dhukarr/DhukarrMiddle';
import Sidebar from '../components/Dhukarr/Sidebar';

const AustralianEducation = () => {



  return(
    <div className="container dictionaryScreen dhukarrScreen auspathwayScreen">

    <TopNav back noBorder title=""/>

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
                    id='0a' 
                    colour='brown'
                    english='Early years through to secondary school pathway'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />

                  <Blob 
                    animation={false}
                    id='0b' 
                    colour='brown'
                    english='BabyHub logo'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />

                  <Blob 
                    animation={false}
                    id='0c' 
                    colour='brown'
                    english='BabyHub offering support to mothers and their babies through a variey of integrated programs'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />
                    
                </DhukarrContent>

                <Blob 
                  animation={false}
                  id='0d' 
                  colour='brown'
                  english='FaFT'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />

                <DhukarrContent orientation="column">

                  <Blob 
                    animation={false}
                    id='0e' 
                    colour='brown'
                    english='East Arnhem RC logo'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />

                  <Blob 
                    animation={false}
                    id='0f' 
                    colour='brown'
                    english='East Arnhem supporting through their Childcare play based program'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />
                  <Blob 
                    animation={false}
                    id='0g' 
                    colour='brown'
                    english='CB logo'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />
                  <Blob 
                    animation={false}
                    id='0h' 
                    colour='brown'
                    english='Connected Beginnings supports school readiness and families in the early years through integrated programming'
                    language={false}
                    style={{position:'relative', top:'0px'}}
                    />

                </DhukarrContent>
         
              </DhukarrContent>

             <Sidebar background={false}  
              id='0' 
              english='Ages 0 - 3.5 years'
              yolngu=''
              language={false}
              />

          </DhukarrSection> 

        </SectionHolder>
      

       {/*Ages 3.5-5 years*/}

       <SectionHolder id='1'>

            <DhukarrSection>

              <DhukarrContent orientation="column">

                <Blob 
                  animation={false}
                  id='1a' 
                  colour='brown'
                  english='Fast logo'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />

                <Blob 
                  animation={false}
                  id='1b' 
                  colour='brown'
                  english='FAST program helps support families and children through a variety of family centric programs'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />


              </DhukarrContent>

              <Blob 
                animation={true}
                id='1c' 
                colour='transparent'
                english='Preschool'
                language={false}
                audio={false}
                style={{position:'relative', left:'0px' }}
                />

              <DhukarrContent orientation="column">

                <Blob 
                  animation={true}
                  id='1d' 
                  colour='white'
                  english='Yalu logo'
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />
                
                <Blob 
                  animation={true}
                  id='1d' 
                  colour='white'
                  english='NEST supports inter-agency collaboration and programs across the child circle'
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />

              </DhukarrContent>       


              <Sidebar background={true}  
                id='1' 
                english='Ages 3.5-5 years'
                yolngu=''
                language={false}
                />
            
            </DhukarrSection>

           </SectionHolder>


        {/*Ages 5-6 years*/}

        <Anchor id='2'/>

        <SectionHolder id='2'>

            <DhukarrSection>

            <DhukarrContent orientation="column">

              <Blob 
                animation={false}
                id='2a' 
                colour='brown'
                english='Logo'
                language={false}
                style={{position:'relative', top:'0px'}}
                />

              <Blob 
                animation={false}
                id='2b' 
                colour='brown'
                english='Learning on Country run a number of programs for children to learn on country at various homelands'
                language={false}
                style={{position:'relative', top:'0px'}}
                />

              </DhukarrContent>

              <Blob 
                animation={true}
                id='2c' 
                colour='transparent'
                english='Transition'
                yolngu=''
                language={false}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <Blob 
                animation={false}
                id='2d' 
                colour='brown'
                english=''
                language={false}
                style={{position:'relative', top:'0px'}}
                />

              <Sidebar background={true}  
                id='2' 
                english='Ages 5-6 years'
                yolngu=''
                language={false}
                />
            
            </DhukarrSection>

           </SectionHolder>

        {/*Ages 6-9 years (grade 1-4)*/}

        <Anchor id='3'/>

         <SectionHolder id='3'>

            <DhukarrSection>

            <DhukarrContent orientation="column">

              <Blob 
                animation={false}
                id='3a' 
                colour='green'
                english='YEAR 1'
                language={false}
                style={{position:'relative', top:'0px'}}
                />
              <Blob 
                animation={false}
                id='3b' 
                colour='green'
                english='YEAR 2'
                language={false}
                style={{position:'relative', top:'0px'}}
                />
              <Blob 
                animation={false}
                id='3c' 
                colour='green'
                english='YEAR 3'
                language={false}
                style={{position:'relative', top:'0px'}}
                />
              <Blob 
                animation={false}
                id='3d' 
                colour='green'
                english='YEAR 4'
                language={false}
                style={{position:'relative', top:'0px'}}
                />

              </DhukarrContent>


              <Blob 
                animation={true}
                id='3e' 
                colour='transparent'
                english='Primary years'
                yolngu=''
                language={false}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <DhukarrContent orientation="column">

              <Blob 
                animation={false}
                id='3f' 
                colour='white'
                english='gvt logo'
                language={false}
                style={{position:'relative', top:'0px'}}
                />
              <Blob 
                animation={false}
                id='3g' 
                colour='green'
                english='Territory Families provide support services across child protection, domestic and family violence'
                language={false}
                style={{position:'relative', top:'0px'}}
                />

              </DhukarrContent>

              <Sidebar background={true}  
                id='3' 
                english='Ages 6-9 years (grade 1-4)'
                yolngu=''
                language={false}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*Ages 10-12 years (grade 5-7)*/}

         <Anchor id='4'/>

         <SectionHolder id='4'>

            <DhukarrSection>

            <DhukarrContent orientation="column">

              <Blob 
                animation={false}
                id='4a' 
                colour='yellow'
                english=''
                language={false}
                style={{position:'relative', top:'0px'}}
                />

            </DhukarrContent>

              <Blob 
                animation={true}
                id='4b' 
                colour='transparent'
                english='Middle years'
                yolngu=''
                language={false}
                audio={false}
                style={{position:'relative', left:'20px' }}
                />

              <DhukarrContent orientation="column">

                <Blob 
                  animation={false}
                  id='4c' 
                  colour='yellow'
                  english='YEAR 5'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />
                <Blob 
                  animation={false}
                  id='4d' 
                  colour='yellow'
                  english='YEAR 6'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />
                <Blob 
                  animation={false}
                  id='4e' 
                  colour='yellow'
                  english='YEAR 7'
                  language={false}
                  style={{position:'relative', top:'0px'}}
                  />

              </DhukarrContent>

              <Sidebar background={true}  
                id='4' 
                english='Ages 10-12 years (grade 5-7)'
                yolngu=''
                language={false}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*Ages 13-17 years (grade 8-12)*/}

         <Anchor id='5'/>

         <SectionHolder id='5'>

          <DhukarrSection>

          <DhukarrContent orientation="column">

          <Blob 
            animation={false}
            id='5a' 
            colour='orange'
            english='YEAR 8'
            language={false}
            style={{position:'relative', top:'0px'}}
            />
          <Blob 
            animation={false}
            id='5b' 
            colour='orange'
            english='YEAR 9'
            language={false}
            style={{position:'relative', top:'0px'}}
            />
          <Blob 
            animation={false}
            id='5c' 
            colour='orange'
            english='YEAR 10'
            language={false}
            style={{position:'relative', top:'0px'}}
            />
          <Blob 
            animation={false}
            id='5d' 
            colour='orange'
            english='YEAR 11'
            language={false}
            style={{position:'relative', top:'0px'}}
            />
          <Blob 
            animation={false}
            id='5e' 
            colour='orange'
            english='YEAR 12'
            language={false}
            style={{position:'relative', top:'0px'}}
            />

          </DhukarrContent>

            <Blob 
              animation={true}
              id='5f' 
              colour='transparent'
              english='Secondary years'
              yolngu=''
              language={false}
              audio={false}
              style={{position:'relative', left:'20px' }}
              />

            <Blob 
            animation={false}
            id='5g' 
            colour='orange'
            english=''
            language={false}
            style={{position:'relative', top:'0px'}}
            />

            <Sidebar background={true}  
              id='5' 
              english='Ages 13-17 years (grade 8-12)'
              yolngu=''
              language={false}
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
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />
                  
                <Blob 
                  animation={true}
                  id='12' 
                  colour='transparent'
                  english='Certificate 2'
                  yolngu=''
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />

                <Blob 
                  animation={true}
                  id='13' 
                  colour='transparent'
                  english='Certificate 3'
                  yolngu=''
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'0px' }}
                  />

                <Blob 
                  animation={true}
                  id='14' 
                  colour='transparent'
                  english='Certificate 4'
                  yolngu=''
                  language={false}
                  audio={false}
                  style={{position:'relative', left:'20px' }}
                  />

                <Blob 
                  animation={true}
                  id='15' 
                  colour='transparent'
                  english='Advanced Diploma'
                  yolngu=''
                  language={false}
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
