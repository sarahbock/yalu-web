import React, {useState, useRef, useEffect} from 'react';

import SoundPlayer from '../SoundPlayer';
import Modal from '../UI/Modal';

import BlobText from './BlobText';
import BlobMore from './BlobMore';

const Blob = ({ id, colour, english, yolngu, language, audio, style, link, textStyle, animation }) => {

  const [isVisible, setVisible] = useState(true);
  const [entryOpen, setEntryOpen] = useState(false);

  const videoLink = link && link.indexOf('youtu.be')!==-1;

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

            <BlobText 
              className={`blobText ${colourClass}`}
              clickHandler={toggleEntryOpenState} 
              >
              {blobText}
            </BlobText>

          { soundFile && <SoundPlayer source={soundFile}/> }

          

        </div>
    </div>

      <BlobMore 
        colourClass={colourClass}
        link={link}
      />
      
  </div>
  )
}

export default Blob;
