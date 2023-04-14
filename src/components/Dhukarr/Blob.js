import React from 'react';

import SoundPlayer from '../SoundPlayer';

const Blob = ({ id, colour, english, yolngu, language, audio, style, link, textStyle }) => {

  const showBlobNumber = true;
  const introBlob = id.substr(0,1) ==='0';
  const classId = introBlob ? 'intro'+id+'Holder' : 'blob'+id+'Holder';
  const soundFile = audio ? require('../../assets/dhukarr/mp3/recording'+id+'.mp3') : null;
  console.log('../../assets/dhukarr/mp3/recording'+id+'.mp3')
  
  let colourClass = '';
  switch ( colour ) {
    case 'yellow': colourClass = 'blobYellow'; break;
    case 'brown': colourClass = 'blobBrown'; break;
    case 'orange': colourClass = 'blobOrange'; break;
    case 'light': colourClass = 'blobLight'; break;
    case 'grey': colourClass = 'blobGrey'; break;
    default: colourClass = '';
  }

  const textClass = textStyle ? textStyle : {};

  const englishText = showBlobNumber ? id+english : english;
  const yolnguText = showBlobNumber ? id+yolngu : yolngu;

  return(

    <div 
      className='blob' 
      style={{
        ...style,
      }}
      id={classId}
      >
        <div className={`${'blobText'} ${colourClass} ${textClass}`} style={textClass}>

          { language ? 
            <>{yolngu ? yolnguText : englishText} </> : 
            <>{englishText}</>
          }

          { soundFile && <SoundPlayer source={soundFile}/> }

          {link && <div className='moreInfo'><a href={`${link}`} rel="noreferrer" target='_blank'>More information</a></div>}

        </div>
    </div>
  )
}

export default Blob;
