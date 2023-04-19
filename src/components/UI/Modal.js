import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import SoundPlayer from '../SoundPlayer';
import previous from '../../assets/back.png';

//accessibility
//using portals to move backdrop content outside the content root element
const Backdrop = props =>{
  return(
    <div className={classes.backdrop} onClick={props.onConfirm} />
  )
}


//using portals to move overlay content outside the content root element
const ModalOverlay = props =>{

  let classesModal=classes.modal; 

  return(
    <div className={classesModal}>
      
      <div className={`${classes.content} ${props.colourClass}`}>

        {props.yolnguText && 
         <p>{props.yolnguText}</p>
        }

        { props.soundFile && <SoundPlayer source={props.soundFile}/> }

        {props.englishText && 
         <p>{props.englishText}</p>
        }

      </div>
     
      <footer className={classes.actions}>

        <div 
          className={classes.button}
          onClick={props.onConfirm}>
            <img src={previous} alt="Back" className="appHeaderIcon"/>
            Go back
        </div>

      </footer>

    </div>
  )
}


const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop 
        onConfirm={props.onConfirm}
        />, 
        document.getElementById('root-backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
        title={props.title} 
        back={props.back} 
        align={props.align} 
        yolnguText={props.yolnguText} 
        englishText={props.englishText} 
        onConfirm={props.onConfirm} 
        onBlur={props.onBlur} 
        onFocus={props.onFocus} 
        soundFile={props.soundFile}
        colourClass={props.colourClass}
        />, 
        document.getElementById('root-overlay')
      )}
    </Fragment>
  );
};

export default Modal;
