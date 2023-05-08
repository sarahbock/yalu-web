import React, { useState } from 'react';

import TopNav from '../components/TopNav';

import Blob from '../components/Dhukarr/Blob';
import SectionHolder from '../components/Dhukarr/SectionHolder';
import DhukarrSection from '../components/Dhukarr/DhukarrSection';
import DhukarrContent from '../components/Dhukarr/DhukarrContent';
import Sidebar from '../components/Dhukarr/Sidebar';
import { blobs } from '../data/australianeducation';

const AustralianEducation = () => {

  const renderSection = (section) => {

    if (section?.id === "00") return;

    return (
      <SectionHolder 
        id={section.id}
        bg={section.bg}
        >

      <DhukarrSection>

      <DhukarrContent>

        {section.data?.length>0 &&
        section.data.map(item => (
          renderBlob(item)
        ))}

      </DhukarrContent>

      <Sidebar
        id={section.id}
        showNumber={false}
        english={section.english}
        subheading={section.subheading}
        yolngu={section.yolngu}
        language={false}
        audio={false}
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
          style={item.style}
          image={item.image}
          transparent={item.transparent}
          bg={item.bg}
          textStyle={item.textStyle}
        />
    )
  }



  return(
    <div className="container dictionaryScreen dhukarrScreen auspathwayScreen">

    <TopNav back noBorder colour='purple' title="The Australian Education System"/>

    <div className='contentContainer'>

        {/*INTRODUCTION*/}

        <SectionHolder id='0'>
          <div  style={{backgroundColor: '#9855a0d4'}}>

          <div className='padThinner'>
            <h1>Dhuwal Marŋgithyamirr Dhukarr Mulkuru Balandaw </h1>
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
