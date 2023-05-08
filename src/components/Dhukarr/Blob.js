import React, {useState, useRef, useEffect} from 'react';

import SoundPlayer from '../SoundPlayer';
import Modal from '../UI/Modal';

import BlobText from './BlobText';
import BlobMore from './BlobMore';
import BlobImage from './BlobImage';
import CaptionText from './CaptionText';

const loadMedia = (id, image, bg) => {

  let bgImageSource = null; let audioSource=null; let imageSource = null;

  switch (image) {
    case 'babyhub': imageSource = require("../../assets/logos/logo_babyhub.png"); break;
    case 'faft': imageSource = require("../../assets/logos/logo_faft.png"); break;
    case 'earc': imageSource = require("../../assets/logos/logo_earc.png"); break;
    case 'cb': imageSource = require("../../assets/logos/logo_cb.png"); break;
    case 'loc': imageSource = require("../../assets/logos/logo_loc.png"); break;
    case 'yalu': imageSource = require("../../assets/logos/logo_yalu.png"); break;
    case 'fast': imageSource = require("../../assets/logos/logo_fast.png"); break;
    case 'gvt': imageSource = require("../../assets/logos/logo_gvt.png"); break;
  }
  switch (bg) {
    case 'whiteblob': bgImageSource = require("../../assets/dhukarr/blobs_blob201.png"); break;
    case 'transparent': bgImageSource = require("../../assets/dhukarr/blob_transparent.png"); break;
    case 'logoblob': bgImageSource = require("../../assets/dhukarr/blobs_blob200.png"); break;
    case 'greenblob': bgImageSource = require("../../assets/dhukarr/blob_green.png"); break;
    case 'yellowblob': bgImageSource = require("../../assets/dhukarr/blob_yellow.png"); break;
    case 'orangeblob': bgImageSource = require("../../assets/dhukarr/blob_orange.png"); break;
    case 'redblob': bgImageSource = require("../../assets/dhukarr/blob_red.png"); break;
  }

  return { loadedImage: imageSource, loadedBgImage: bgImageSource, loadedAudio: audioSource}
}

const Blob = ({ id, colour, english, yolngu, language, audio, style, link, textStyle, animation, image, bg, caption }) => {

  const [isVisible, setVisible] = useState(true);
  const [entryOpen, setEntryOpen] = useState(false);

  const domRef = useRef();

  const showBlobNumber = true;
  const introBlob = id.substr(0,1) ==='0';
  const classId = introBlob ? 'intro'+id+'Holder' : 'blob'+id+'Holder';
  const soundFile = audio ? require('../../assets/dhukarr/mp3/recording'+id+'.mp3') : null;

  //open/close entry state
  const toggleEntryOpenState = () => {
    setEntryOpen(!entryOpen);
  };

  useEffect(() => {
    if (!animation) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [animation]);

  

  
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

  const englishText = showBlobNumber ? id+' '+english : english;
  const yolnguText = showBlobNumber ? id+' '+yolngu : yolngu;

  const blobText = language ? yolngu ? yolnguText : englishText : englishText;

  const randomTransitionDelay = Math.random()+'s';
  const randomTranslateY = (Math.floor(Math.random() * 20) + 1) + 'px';

  const media = loadMedia(id, image, bg);
  const bgImageSource = media.loadedBgImage;
  const imageSource = media.loadedImage;
  const audioSource = media.loadedAudio;


  return(

    <div>
    <div 
      
      className={`
        blob 
        ${ isVisible ? 'is-visible' : animation ? '' : 'is-visible'}
        `} 
      ref={ domRef } 
      style={{
        transitionDuration: animation ? {randomTransitionDelay} : 0,
       transform: animation ? `translateY(${randomTranslateY})` : `none`,
       backgroundImage: bgImageSource ? `url(${bgImageSource})` : null,
        ...style,
      }}
      id={classId}
      >

        {entryOpen &&
          <Modal 
            title={''} 
            englishText={englishText} 
            yolnguText={yolnguText} 
            soundFile ={soundFile}
            colourClass = {colourClass}
            onConfirm={toggleEntryOpenState}
            />
        }

        <div 
          className={`blobTextHolder ${colourClass}`}
          style={textClass}
          >

          {!caption && 

          <BlobText 
            className={`blobText ${colourClass}`}
            clickHandler={toggleEntryOpenState} 
            >
            {blobText}
          </BlobText>
          }

          {imageSource && 
          <BlobImage
          source={imageSource}
          clickHandler={toggleEntryOpenState}
          style={{width:200, height:200}} 
          />
          }

          { soundFile && <SoundPlayer source={soundFile}/> }

          

        </div>
    </div>

      <BlobMore 
        colourClass={colourClass}
        link={link}
      />

      {/*caption && 
        <CaptionText 
          colour={colour} 
          clickHandler={toggleEntryOpenState}
          >
          {blobText}
        </CaptionText>
        */} 
      
  </div>
  )
}

export default Blob;
