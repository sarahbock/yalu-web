import React, {useState, useRef, useEffect} from 'react';

import SoundPlayer from '../SoundPlayer';
import Modal from '../UI/Modal';

import BlobText from './BlobText';
import BlobMore from './BlobMore';
import BlobImage from './BlobImage';
import CaptionText from './CaptionText';

const loadMedia = (id, image, bg) => {

  let bgImageSource = null; let audioSource=null; let imageSource = null;

  switch (id) {
    /*INTRO*/
    case '01': bgImageSource = require("../../assets/dhukarr/blobs_intro01.png"); audioSource = require('../../assets/dhukarr/mp3/recording01.mp3'); break;
    case '02': bgImageSource = require("../../assets/dhukarr/blobs_intro02.png"); audioSource = require('../../assets/dhukarr/mp3/recording02.mp3'); break;
    case '03': bgImageSource = require("../../assets/dhukarr/blobs_intro03.png"); audioSource = require('../../assets/dhukarr/mp3/recording03.mp3'); break;
    case '04': bgImageSource = require("../../assets/dhukarr/blobs_intro04.png"); audioSource = require('../../assets/dhukarr/mp3/recording04.mp3'); break;
    case '05': bgImageSource = require("../../assets/dhukarr/blobs_intro05.png"); audioSource = require('../../assets/dhukarr/mp3/recording05.mp3'); break;

    /*SECTION 0*/
    case '3': bgImageSource = require("../../assets/dhukarr/blobs_blob3.png"); audioSource = require('../../assets/dhukarr/mp3/recording3.mp3'); break;
    case '5': bgImageSource = require("../../assets/dhukarr/blobs_blob5.png"); audioSource = require('../../assets/dhukarr/mp3/recording5.mp3'); break;
    case '8': bgImageSource = require("../../assets/dhukarr/blobs_blob8.png"); audioSource = require('../../assets/dhukarr/mp3/recording8.mp3'); break;
    case '4': bgImageSource = require("../../assets/dhukarr/blobs_blob4.png"); audioSource = require('../../assets/dhukarr/mp3/recording4.mp3'); break;
    case '6': bgImageSource = require("../../assets/dhukarr/blobs_blob6.png"); audioSource = require('../../assets/dhukarr/mp3/recording6.mp3'); break;
    case '7': bgImageSource = require("../../assets/dhukarr/blobs_blob7.png"); audioSource = require('../../assets/dhukarr/mp3/recording7.mp3'); break;

     /*SECTION 1*/
     case '11': bgImageSource = require("../../assets/dhukarr/blobs_blob11.png"); audioSource = require('../../assets/dhukarr/mp3/recording11.mp3'); break;
     case '12': bgImageSource = require("../../assets/dhukarr/blobs_blob12.png"); audioSource = require('../../assets/dhukarr/mp3/recording12.mp3'); break;
     case '13': bgImageSource = require("../../assets/dhukarr/blobs_blob13.png"); audioSource = require('../../assets/dhukarr/mp3/recording13.mp3'); break;
     case '14': bgImageSource = require("../../assets/dhukarr/blobs_blob14.png"); audioSource = require('../../assets/dhukarr/mp3/recording14.mp3'); break;
     case '15': bgImageSource = require("../../assets/dhukarr/blobs_blob15.png"); audioSource = require('../../assets/dhukarr/mp3/recording15.mp3'); break;
     case '16': bgImageSource = require("../../assets/dhukarr/blobs_blob16.png"); audioSource = require('../../assets/dhukarr/mp3/recording16.mp3'); break;

     /*SECTION 2*/
     case '18': bgImageSource = require("../../assets/dhukarr/blobs_blob18.png"); audioSource = require('../../assets/dhukarr/mp3/recording18.mp3'); break;
     case '19': bgImageSource = require("../../assets/dhukarr/blobs_blob19.png"); audioSource = require('../../assets/dhukarr/mp3/recording19.mp3'); break;
     case '20': bgImageSource = require("../../assets/dhukarr/blobs_blob20.png"); audioSource = require('../../assets/dhukarr/mp3/recording20.mp3'); break;
     case '21': bgImageSource = require("../../assets/dhukarr/blobs_blob21.png"); audioSource = require('../../assets/dhukarr/mp3/recording21.mp3'); break;
     
     /*SECTION 3*/
     case '23': bgImageSource = require("../../assets/dhukarr/blobs_blob23.png"); audioSource = require('../../assets/dhukarr/mp3/recording23.mp3'); break;
     case '24': bgImageSource = require("../../assets/dhukarr/blobs_blob24.png"); audioSource = require('../../assets/dhukarr/mp3/recording24.mp3'); break;
     case '25': bgImageSource = require("../../assets/dhukarr/blobs_blob25.png"); audioSource = require('../../assets/dhukarr/mp3/recording25.mp3'); break;
     case '26': bgImageSource = require("../../assets/dhukarr/blobs_blob26.png"); audioSource = require('../../assets/dhukarr/mp3/recording26.mp3'); break;
     case '27': bgImageSource = require("../../assets/dhukarr/blobs_blob27.png"); audioSource = require('../../assets/dhukarr/mp3/recording27.mp3'); break;
     case '28': bgImageSource = require("../../assets/dhukarr/blobs_blob28.png"); audioSource = require('../../assets/dhukarr/mp3/recording28.mp3'); break;
     case '29': bgImageSource = require("../../assets/dhukarr/blobs_blob29.png"); audioSource = require('../../assets/dhukarr/mp3/recording29.mp3'); break;
     case '30': bgImageSource = require("../../assets/dhukarr/blobs_blob30.png"); audioSource = require('../../assets/dhukarr/mp3/recording30.mp3'); break;
     case '31': bgImageSource = require("../../assets/dhukarr/blobs_blob31.png"); audioSource = require('../../assets/dhukarr/mp3/recording31.mp3'); break;
     case '32': bgImageSource = require("../../assets/dhukarr/blobs_blob32.png"); audioSource = require('../../assets/dhukarr/mp3/recording32.mp3'); break;
     case '33': bgImageSource = require("../../assets/dhukarr/blobs_blob33.png"); audioSource = require('../../assets/dhukarr/mp3/recording33.mp3'); break;
     case '34': bgImageSource = require("../../assets/dhukarr/blobs_blob34.png"); audioSource = require('../../assets/dhukarr/mp3/recording34.mp3'); break;
     case '35': bgImageSource = require("../../assets/dhukarr/blobs_blob35.png"); audioSource = require('../../assets/dhukarr/mp3/recording35.mp3'); break;
     case '36': bgImageSource = require("../../assets/dhukarr/blobs_blob36.png"); audioSource = require('../../assets/dhukarr/mp3/recording36.mp3'); break;
     case '37': bgImageSource = require("../../assets/dhukarr/blobs_blob37.png"); audioSource = require('../../assets/dhukarr/mp3/recording37.mp3'); break;
     case '38': bgImageSource = require("../../assets/dhukarr/blobs_blob38.png"); audioSource = require('../../assets/dhukarr/mp3/recording38.mp3'); break;
     case '39': bgImageSource = require("../../assets/dhukarr/blobs_blob39.png"); audioSource = require('../../assets/dhukarr/mp3/recording39.mp3'); break;
     case '40': bgImageSource = require("../../assets/dhukarr/blobs_blob40.png"); audioSource = require('../../assets/dhukarr/mp3/recording40.mp3'); break;


     /*SECTION 4*/
     case '42': bgImageSource = require("../../assets/dhukarr/blobs_blob42.png"); audioSource = require('../../assets/dhukarr/mp3/recording42.mp3'); break;
     case '43': bgImageSource = require("../../assets/dhukarr/blobs_blob43.png"); audioSource = require('../../assets/dhukarr/mp3/recording43.mp3'); break;
     case '44': bgImageSource = require("../../assets/dhukarr/blobs_blob44.png"); audioSource = require('../../assets/dhukarr/mp3/recording44.mp3'); break;
     case '45': bgImageSource = require("../../assets/dhukarr/blobs_blob45.png"); audioSource = require('../../assets/dhukarr/mp3/recording45.mp3'); break;
     case '46': bgImageSource = require("../../assets/dhukarr/blobs_blob46.png"); audioSource = require('../../assets/dhukarr/mp3/recording46.mp3'); break;
     case '47': bgImageSource = require("../../assets/dhukarr/blobs_blob47.png"); audioSource = require('../../assets/dhukarr/mp3/recording47.mp3'); break;
     case '48': bgImageSource = require("../../assets/dhukarr/blobs_blob48.png"); audioSource = require('../../assets/dhukarr/mp3/recording48.mp3'); break;
     case '49': bgImageSource = require("../../assets/dhukarr/blobs_blob49.png"); audioSource = require('../../assets/dhukarr/mp3/recording49.mp3'); break;
     case '50': bgImageSource = require("../../assets/dhukarr/blobs_blob50.png"); audioSource = require('../../assets/dhukarr/mp3/recording50.mp3'); break;
     case '51': bgImageSource = require("../../assets/dhukarr/blobs_blob51.png"); audioSource = require('../../assets/dhukarr/mp3/recording51.mp3'); break;
     case '52': bgImageSource = require("../../assets/dhukarr/blobs_blob52.png"); audioSource = require('../../assets/dhukarr/mp3/recording52.mp3'); break;

     /*SECTION 5*/
     case '54': bgImageSource = require("../../assets/dhukarr/blobs_blob54.png"); audioSource = require('../../assets/dhukarr/mp3/recording54.mp3'); break;
     case '55': bgImageSource = require("../../assets/dhukarr/blobs_blob55.png"); audioSource = require('../../assets/dhukarr/mp3/recording55.mp3'); break;
     case '56': bgImageSource = require("../../assets/dhukarr/blobs_blob56.png"); audioSource = require('../../assets/dhukarr/mp3/recording56.mp3'); break;
     case '57': bgImageSource = require("../../assets/dhukarr/blobs_blob57.png"); audioSource = require('../../assets/dhukarr/mp3/recording57.mp3'); break;
     case '58': bgImageSource = require("../../assets/dhukarr/blobs_blob58.png"); audioSource = require('../../assets/dhukarr/mp3/recording58.mp3'); break;
     case '59': bgImageSource = require("../../assets/dhukarr/blobs_blob59.png"); audioSource = require('../../assets/dhukarr/mp3/recording59.mp3'); break;
     case '60': bgImageSource = require("../../assets/dhukarr/blobs_blob60.png"); audioSource = require('../../assets/dhukarr/mp3/recording60.mp3'); break;
     case '61': bgImageSource = require("../../assets/dhukarr/blobs_blob61.png"); audioSource = require('../../assets/dhukarr/mp3/recording61.mp3'); break;
     case '62': bgImageSource = require("../../assets/dhukarr/blobs_blob62.png"); audioSource = require('../../assets/dhukarr/mp3/recording62.mp3'); break;
     case '63': bgImageSource = require("../../assets/dhukarr/blobs_blob63.png"); audioSource = require('../../assets/dhukarr/mp3/recording63.mp3'); break;
     case '64': bgImageSource = require("../../assets/dhukarr/blobs_blob64.png"); audioSource = require('../../assets/dhukarr/mp3/recording64.mp3'); break;
     case '65': bgImageSource = require("../../assets/dhukarr/blobs_blob65.png"); audioSource = require('../../assets/dhukarr/mp3/recording65.mp3'); break;
     case '66': bgImageSource = require("../../assets/dhukarr/blobs_blob66.png"); audioSource = require('../../assets/dhukarr/mp3/recording66.mp3'); break;
     case '67': bgImageSource = require("../../assets/dhukarr/blobs_blob67.png"); audioSource = require('../../assets/dhukarr/mp3/recording67.mp3'); break;
     case '68': bgImageSource = require("../../assets/dhukarr/blobs_blob68.png"); audioSource = require('../../assets/dhukarr/mp3/recording68.mp3'); break;
     case '69': bgImageSource = require("../../assets/dhukarr/blobs_blob69.png"); audioSource = require('../../assets/dhukarr/mp3/recording69.mp3'); break;
     case '70': bgImageSource = require("../../assets/dhukarr/blobs_blob70.png"); audioSource = require('../../assets/dhukarr/mp3/recording70.mp3'); break;
     
     /*SECTION 6*/
     case '71': bgImageSource = require("../../assets/dhukarr/blobs_blob71.png"); audioSource = require('../../assets/dhukarr/mp3/recording71.mp3'); break;
     case '72': bgImageSource = require("../../assets/dhukarr/blobs_blob72.png"); audioSource = require('../../assets/dhukarr/mp3/recording72.mp3'); break;
     case '73': bgImageSource = require("../../assets/dhukarr/blobs_blob73.png"); audioSource = require('../../assets/dhukarr/mp3/recording73.mp3'); break;
     case '74': bgImageSource = require("../../assets/dhukarr/blobs_blob74.png"); audioSource = require('../../assets/dhukarr/mp3/recording74.mp3'); break;
     case '75': bgImageSource = require("../../assets/dhukarr/blobs_blob75.png"); audioSource = require('../../assets/dhukarr/mp3/recording75.mp3'); break;
     case '76': bgImageSource = require("../../assets/dhukarr/blobs_blob76.png"); audioSource = require('../../assets/dhukarr/mp3/recording76.mp3'); break;
     case '77': bgImageSource = require("../../assets/dhukarr/blobs_blob77.png"); audioSource = require('../../assets/dhukarr/mp3/recording77.mp3'); break;
     case '78': bgImageSource = require("../../assets/dhukarr/blobs_blob78.png"); audioSource = require('../../assets/dhukarr/mp3/recording78.mp3'); break;
     case '80': bgImageSource = require("../../assets/dhukarr/blobs_blob80.png"); audioSource = require('../../assets/dhukarr/mp3/recording80.mp3'); break;
     case '81': bgImageSource = require("../../assets/dhukarr/blobs_blob81.png"); audioSource = require('../../assets/dhukarr/mp3/recording81.mp3'); break;
     case '82': bgImageSource = require("../../assets/dhukarr/blobs_blob82.png"); audioSource = require('../../assets/dhukarr/mp3/recording82.mp3'); break;
     case '83': audioSource = require('../../assets/dhukarr/mp3/recording83.mp3'); break;
     
     /*SECTION 7*/
     case '85': audioSource = require('../../assets/dhukarr/mp3/recording85.mp3'); break;
     case '86': audioSource = require('../../assets/dhukarr/mp3/recording86.mp3'); break;
     case '87': audioSource = require('../../assets/dhukarr/mp3/recording87.mp3'); break;
     case '88': audioSource = require('../../assets/dhukarr/mp3/recording88.mp3'); break;
     case '89': audioSource = require('../../assets/dhukarr/mp3/recording89.mp3'); break;
     case '90': audioSource = require('../../assets/dhukarr/mp3/recording90.mp3'); break;
     case '91': audioSource = require('../../assets/dhukarr/mp3/recording91.mp3'); break;
     case '92': audioSource = require('../../assets/dhukarr/mp3/recording92.mp3'); break;
     case '93': audioSource = require('../../assets/dhukarr/mp3/recording93.mp3'); break;
     case '94': audioSource = require('../../assets/dhukarr/mp3/recording94.mp3'); break;
     case '95': audioSource = require('../../assets/dhukarr/mp3/recording95.mp3'); break;

     /*SECTION 8*/
     case '97': audioSource = require('../../assets/dhukarr/mp3/recording97.mp3'); break;
     case '98': audioSource = require('../../assets/dhukarr/mp3/recording98.mp3'); break;
     case '99': audioSource = require('../../assets/dhukarr/mp3/recording99.mp3'); break;
     case '100': audioSource = require('../../assets/dhukarr/mp3/recording100.mp3'); break;
     case '101': audioSource = require('../../assets/dhukarr/mp3/recording101.mp3'); break;
     case '102': audioSource = require('../../assets/dhukarr/mp3/recording102.mp3'); break;
     case '103': audioSource = require('../../assets/dhukarr/mp3/recording103.mp3'); break;

     /*SECTION 9*/
     case '105': audioSource = require('../../assets/dhukarr/mp3/recording105.mp3'); break;
     case '106': audioSource = require('../../assets/dhukarr/mp3/recording106.mp3'); break;
     case '107': audioSource = require('../../assets/dhukarr/mp3/recording107.mp3'); break;
     case '108': audioSource = require('../../assets/dhukarr/mp3/recording108.mp3'); break;
     case '109': audioSource = require('../../assets/dhukarr/mp3/recording109.mp3'); break;
     case '110': audioSource = require('../../assets/dhukarr/mp3/recording110.mp3'); break;

     /*SECTION 10*/
     case '112': audioSource = require('../../assets/dhukarr/mp3/recording112.mp3'); break;
     case '113': audioSource = require('../../assets/dhukarr/mp3/recording113.mp3'); break;
     case '114': audioSource = require('../../assets/dhukarr/mp3/recording114.mp3'); break;
     case '115': audioSource = require('../../assets/dhukarr/mp3/recording115.mp3'); break;
     case '116': audioSource = require('../../assets/dhukarr/mp3/recording116.mp3'); break;
     case '117': audioSource = require('../../assets/dhukarr/mp3/recording117.mp3'); break;
     case '118': audioSource = require('../../assets/dhukarr/mp3/recording118.mp3'); break;

     /*SECTION 11*/
     case '120': audioSource = require('../../assets/dhukarr/mp3/recording120.mp3'); break;
     case '121': audioSource = require('../../assets/dhukarr/mp3/recording121.mp3'); break;
     case '122': audioSource = require('../../assets/dhukarr/mp3/recording122.mp3'); break;
     case '123': audioSource = require('../../assets/dhukarr/mp3/recording123.mp3'); break;
     case '124': audioSource = require('../../assets/dhukarr/mp3/recording124.mp3'); break;

     /*SECTION 12*/
     case '126': audioSource = require('../../assets/dhukarr/mp3/recording126.mp3'); break;
     case '127': audioSource = require('../../assets/dhukarr/mp3/recording127.mp3'); break;
     case '128': audioSource = require('../../assets/dhukarr/mp3/recording128.mp3'); break;
     case '129': audioSource = require('../../assets/dhukarr/mp3/recording129.mp3'); break;
     case '130': audioSource = require('../../assets/dhukarr/mp3/recording130.mp3'); break;

     /*SECTION 13*/
     case '132': audioSource = require('../../assets/dhukarr/mp3/recording132.mp3'); break;
     case '133': audioSource = require('../../assets/dhukarr/mp3/recording133.mp3'); break;
     case '134': audioSource = require('../../assets/dhukarr/mp3/recording134.mp3'); break;
     case '135': audioSource = require('../../assets/dhukarr/mp3/recording135.mp3'); break;
     case '136': audioSource = require('../../assets/dhukarr/mp3/recording136.mp3'); break;

     /*SECTION 14*/
     case '138': audioSource = require('../../assets/dhukarr/mp3/recording138.mp3'); break;
     case '139': audioSource = require('../../assets/dhukarr/mp3/recording139.mp3'); break;
     case '140': audioSource = require('../../assets/dhukarr/mp3/recording140.mp3'); break;

     /*AUS ED*/
     case '2092': audioSource = require('../../assets/aused/mp3/aused_pts.mp3'); break;
     case '2067': audioSource = require('../../assets/aused/mp3/aused_atar.mp3'); break;
     case '2071': audioSource = require('../../assets/aused/mp3/aused_pathway.mp3'); break;

    default: audioSource = null;
  }

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
    case 'lightblueblob': bgImageSource = require("../../assets/dhukarr/aused_lightblue.png"); break;
    case 'darkpinkblob': bgImageSource = require("../../assets/dhukarr/aused_darkpink.png"); break;
    case 'lightaquablob': bgImageSource = require("../../assets/dhukarr/aused_lightaqua.png"); break;
    case 'lightgreenblob': bgImageSource = require("../../assets/dhukarr/aused_lightgreen.png"); break;
    case 'lightorangeblob': bgImageSource = require("../../assets/dhukarr/aused_lightorange.png"); break;
    case 'lightpinkblob': bgImageSource = require("../../assets/dhukarr/aused_lightpink.png"); break;
    case 'lightredblob': bgImageSource = require("../../assets/dhukarr/aused_lightred.png"); break;
    case 'lightyellowblob': bgImageSource = require("../../assets/dhukarr/aused_lightyellow.png"); break;
    case 'pinkblob': bgImageSource = require("../../assets/dhukarr/aused_pink.png"); break;
    case 'verydarkpinkblob': bgImageSource = require("../../assets/dhukarr/aused_verydarkpink.png"); break;
  }

  return { loadedImage: imageSource, loadedBgImage: bgImageSource, loadedAudio: audioSource}
}

const Blob = ({ id, colour, english, yolngu, language, audio, style, link, textStyle, fontStyle, animation, image, bg, caption }) => {

  const [isVisible, setVisible] = useState(true);
  const [entryOpen, setEntryOpen] = useState(false);

  const domRef = useRef();

  const showBlobNumber = false;
  const introBlob = id.substr(0,1) ==='0';
  const classId = introBlob ? 'intro'+id+'Holder' : 'blob'+id+'Holder';

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
    case 'blue': colourClass = 'blobBlue'; break;
    case 'brown': colourClass = 'blobBrown'; break;
    case 'orange': colourClass = 'blobOrange'; break;
    case 'light': colourClass = 'blobLight'; break;
    case 'grey': colourClass = 'blobGrey'; break;
    case 'aqua': colourClass = 'blobAqua'; break;
    case 'green': colourClass = 'blobGreen'; break;
    case 'red': colourClass = 'blobRed'; break;
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
       padding: imageSource ? 30 : 50,
        ...style,
      }}
      id={classId}
      >

        {entryOpen &&
          <Modal 
            title={''} 
            englishText={englishText} 
            yolnguText={yolnguText} 
            soundFile ={audioSource}
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
            fontStyle={fontStyle}
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

          { audioSource && <SoundPlayer source={audioSource}/> }

          

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
