import React, { useState } from 'react';



import TopNav from '../components/TopNav';
import CeremonyVideo from '../components/Dhukarr/CeremonyVideo';

const Ceremony = () => {


  
  return(

    <div className="container brown dhukarrScreen ceremonyScreen">

    <TopNav back noBorder colour='brown' title="Ceremony as a Yolŋu classroom"/>

      <div className='contentContainer'>
        
      <p>The skills and knowledge that Yolŋu children develop outside the school context are often invisible to those from other cultural backgrounds. </p>
      <p>These videos demonstrate one of the rich learning environments – ceremony - in which Yolŋu children are immersed from birth. </p>
      <p>The videos also share other cultural information that Yolŋu consider helpful for Balanda working in their community.</p>

      <CeremonyVideo video='6ECrt_zIL2A' title='Bukulup ga Daḏayun Cleansing Ceremony'/>

      <CeremonyVideo video='3UOs2zK8scQ' title='Ceremonial body painting'/>
      
      <CeremonyVideo video='fvIqfff3RFY' title='Dhapi initiation ceremony'/>
      
      <CeremonyVideo video='XBInm-YrIRk' title='Gumurryu märram adoption'/>

      </div>

        
    </div>
  )
}

export default Ceremony;
