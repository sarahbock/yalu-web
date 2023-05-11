import React, { useState } from 'react';

import TopNav from '../components/TopNav';
import SoundPlayer from '../components/SoundPlayer';
import Blob from '../components/Dhukarr/Blob';
import SectionHolder from '../components/Dhukarr/SectionHolder';
import DhukarrSection from '../components/Dhukarr/DhukarrSection';
import DhukarrContent from '../components/Dhukarr/DhukarrContent';
import Sidebar from '../components/Dhukarr/Sidebar';
import { blobs } from '../data/australianeducation';

const loadAudio = (id) => {
  let audioSource=null;
  switch (id) {
    //case '15': audioSource = require('../assets/aused/mp3/aused_tertiary.mp3'); break;
  }
  return audioSource ? audioSource : false;
}

const AustralianEducation = () => {

  const renderSection = (section) => {

    if (section?.id === "00") return;

    const audioSource = (section?.audio) ? loadAudio(section.id) : false;

    return (
      <SectionHolder 
        id={section.id}
        bg={section.bg}
        style={section.style}
        >

      <DhukarrSection>

      <DhukarrContent align={section.align}>

        {section.data?.length>0 &&

        section.data.map(item => (
          
          item.ladder ? 
          
          <div className={`blobLadder blobLadderLeft ${item.ladderClass}`}>
            {item.ladder.map(item => (
            renderBlob(item)
          ))}
          </div> : 
          
          renderBlob(item)
       
       ))}

      </DhukarrContent>

      <Sidebar
        id={section.id}
        showNumber={false}
        english={section.subheading}
        subheading={section.subheading}
        yolngu={section.yolngu}
        language={false}
        audio={audioSource}
        bgStyle={{backgroundColor:'#00000080'}}
        textStyle={{color:'#FFFFFF'}}
        colourActive='#000000'
        colourInactive='#FFFFFF'
        />

      </DhukarrSection>

      </SectionHolder>
    )
  }


  const renderBlob = (item) => {
    return (
      <Blob 
          animation={item.animation}
          id={item.id}
          colour={item.colour}
          caption={item.transparent ? false : true}
          english={item.english}
          yolngu={item.yolngu}
          language={false}
          audio={item.audio}
          video={item.video}
          link={item.link}
          style={item.style}
          image={item.image}
          transparent={item.transparent}
          bg={item.bg}
          textStyle={item.textStyle}
          fontStyle={item.fontStyle}
        />
    )
  }



  return(
    <div className="container purple dictionaryScreen dhukarrScreen auspathwayScreen">

    <TopNav back noBorder colour='purple' title="The Australian Education System (Northern Territory)"/>

    <div className='contentContainer'>

        {/*INTRODUCTION*/}

        <SectionHolder id='0'>
          <div  style={{backgroundColor: '#9855a0d4'}}>

          <div className='padThinner'>
            <h1>Dhuwal Balandaw Marŋgithyamirr Dhukarr</h1>
            <SoundPlayer source={require('../assets/aused/mp3/aused_intro.mp3')}/>
            <h2 className='marginTop'>Early years through to secondary school pathway </h2>
          </div>

          </div>

          {blobs?.length>0 &&
            blobs.map(section => (
              renderSection(section)
            ))}

          </SectionHolder>

    
    </div>

      

    </div>
  )
}

export default AustralianEducation;
