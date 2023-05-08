import React  from 'react';

import info from '../../assets/play.png';


const BlobMore = ({ link, colourClass}) => {

  const videoLink = link && link.indexOf('youtu.be')!==-1;


  if (!link) return;


  return(

    <div className={`moreInfo ${colourClass}`}>
              
      <a href={`${link}`} rel="noreferrer" target='_blank'>
        <img src={info} alt="Info" className="infoIcon"/> 
      </a>

      <a href={`${link}`} rel="noreferrer" target='_blank'>
      { videoLink ? 'Watch clip': 'More information' } 
      </a>
      
    </div>
   
  )
}

export default BlobMore;
