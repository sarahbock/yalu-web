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




  return(
    <div className="container dictionaryScreen dhukarrScreen">

    <TopNav back noBorder title="Australian Education System"/>

      <div className='contentContainer'>

        {/*INTRODUCTION*/}

        <SectionHolder id='0'>

          <div className='padThinner'>
            <h1>Australian Education System</h1>
            <h2 className='marginTop'>Yolŋu title</h2>
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

          <DhukarrSection>

              <DhukarrContent orientation="column">

              <DhukarrContent orientation="row">

                <DhukarrContent orientation="column" arrow={true}>
                  <BlobArrow 
                    id='8'
                    style={{position:'relative', top:'-20px'}}
                  />
                  <Blob 
                  animation={false}
                  id='8' 
                  colour='brown'
                  english='In the Yolŋu system, we all work together to care and support the child’s development.'
                  yolngu='Dhuwal yothuw gakal yolŋuwal romŋur ŋanapurruŋgal djägany ŋuli räḻ-manapanmirr.'
                  language={language}
                  audio={true}
                  style={{position:'relative', top:'20px'}}
                  />
                </DhukarrContent>

                <DhukarrContent orientation="column" arrow={true}>
                  <BlobArrow 
                      id='3'
                      style={{position:'relative', top:'-150px'}}
                    />
                  <Blob 
                  animation={false}
                  id='3' 
                  colour='yellow'
                  english='The child knows what is best for their growth – when to sleep, eat, play (the child decides not the family).'
                  yolngu='ŋayi yothu marŋgi nhaltjan ŋayi ŋuli galŋa-dhulŋithirr –  ŋorranharaw ga buḻ’yunaraw ga ŋaminiwu ŋulkthunaraw.'
                  language={language}
                  audio={true}
                  style={{position:'relative', top:'-120px',}}
                  textStyle={{width:'80%'}}
                  />
                </DhukarrContent>

                <DhukarrContent orientation="column" arrow={true}>
                <BlobArrow 
                    id='5'
                    style={{position:'relative', top:'-100px'}}
                  />
                <Blob 
                animation={false}
                id='5' 
                colour='yellow'
                english='Gurruṯu (kinship connection) testing—teaching—testing—teaching routines continue all the time until the child has demonstrated strong understanding of kinship concepts and their own relationship.'
                yolngu='Gurruṯuny ŋanapurr ŋuli marŋgi- gurrapan ŋunhi yothuny ŋayi ŋuli marrtji ŋuthan. Ga bulu ŋanapurr ŋuli walalany birrka’yun nhä ŋayi ŋunhi gurruṯu nhanŋu yothuw bitjan bili.'
                language={language}
                audio={true}
                style={{position:'relative', top:'-80px', }}
                />
                </DhukarrContent>

             

            </DhukarrContent>
            <DhukarrContent orientation="row">

            <DhukarrContent orientation="column" arrow={true}>
            <BlobArrow 
                    id='7'
                    style={{position:'relative', top:'-40px'}}
                  />
                <Blob 
                      animation={false}
                      id='7' 
                      colour='brown'
                      english='Grandparents support and offer advice to mum and dad and rest of the family so they understand how to care for the child.'
                      yolngu='Märiy ga ŋathiy ŋuli guŋga’yun ga gurrupan dharaŋanaraw bäpaw ga ŋaṉḏiw  ga wiripuny mala gurruṯumirriw märr walal dhu dharaŋan nhaltjan walal dhu djäga yothuw.'
                      language={language}
                      audio={true}
                      style={{position:'relative', top:'-20px', }}
                  />
                </DhukarrContent>

                <DhukarrContent orientation="column" arrow={true}>
                <BlobArrow 
                    id='4'
                    style={{position:'relative', top:'-90px'}}
                  />
                  <Blob 
                  animation={false}
                  id='4' 
                  colour='grey'
                  english='Family constantly observe and monitor how the child is developing in all areas (identity, skills, knowledge, character etc) - ‘watching what knowledge the child has caught’ (ref).'
                  yolngu='Gurruṯumirriy ŋuli dhuwurr nhäma yothuny - nhaltjan ŋayi ŋuli romgu ga gakalwu marŋgithirr bitjan bili.'
                  language={language}
                  audio={true}
                  style={{position:'relative', top:'-80px',  width:'100%'}}
                  textStyle={{width:'80%'}}
                  />
                </DhukarrContent>

                <DhukarrContent orientation="column" arrow={true}>
                <BlobArrow 
                    id='6'
                    style={{position:'relative', top:'-110px'}}
                  />
                  <Blob 
                    animation={false}
                    id='6' 
                    colour='yellow'
                    english='The child decides what they want or don’t want – they have autonomy – family don’t force them or hurt their feelings by refusing to give them what they want. '
                    yolngu='Yothuw ŋayaŋu nhaku ŋayi djäl ga nhaku malaŋuw – ŋayi ŋunhi rumbal waṯaŋu – gurruṯumirriy ŋuli yaka gurkuryun wo ŋayaŋu wutthun yothuny.'
                    language={language}
                    audio={true}
                    style={{position:'relative', top:'-80px',}}
                    />
                </DhukarrContent>

                

                

               
                  </DhukarrContent>

              </DhukarrContent>

             {/*SIDE BAR - ONGOING*/}

             <Sidebar background={false}  
              id='0' 
              english='Ages 0 - 3.5 years'
              yolngu=''
              language={language}
              />

          </DhukarrSection> 

        </SectionHolder>
      

       {/*SECTION 1*/}

       <SectionHolder id='1'>

            <DhukarrSection>

              <DhukarrContent orientation="column">

                Fast program

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
                Preschool

              </DhukarrContent>

              <Sidebar background={true}  
                id='1' 
                english='Ages 3.5 - 5 years'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


        {/*SECTION 2*/}

        <Anchor id='2'/>

        <SectionHolder id='2'>

            <DhukarrSection>

              <DhukarrContent orientation="row">
                
               Transition

              </DhukarrContent>

              <Sidebar background={true}  
                id='2' 
                english='Ages 5-6 years'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>

        {/*SECTION 3*/}

        <Anchor id='3'/>

         <SectionHolder id='3'>

            <DhukarrSection>

              <DhukarrContent orientation="row">
                
               Primary years

              </DhukarrContent>

              <Sidebar background={true}  
                id='3' 
                english='Ages 6-9 years (grade 1-4)'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*SECTION 4*/}

         <Anchor id='4'/>

         <SectionHolder id='4'>

            <DhukarrSection>

              <DhukarrContent orientation="row">
                
               Middle years

              </DhukarrContent>

              <Sidebar background={true}  
                id='4' 
                english='Ages 10-12 years (grade 5-7)'
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>
            
           </SectionHolder>


         {/*SECTION 5*/}

         <Anchor id='5'/>

         <SectionHolder id='5'>

          <DhukarrSection>

            <DhukarrContent orientation="row">
              
            Secondary years

            </DhukarrContent>

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

              <DhukarrContent orientation="row">
                
               Higher education

              </DhukarrContent>

            
            </DhukarrSection>
            
           </SectionHolder>


        


          

        
        
      </div>

      
 

    

    </div>
  )
}

export default AustralianEducation;
