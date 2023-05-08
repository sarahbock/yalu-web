import React, {useState, useRef, useEffect} from 'react';

const CaptionText = ({ children, colour, clickHandler, textStyle}) => {

  let fontColour;
  switch (colour) {
    case 'white':  fontColour = "#FFFFFF"; break;
    default: fontColour = '#831C19';
  }

  return(

    <div style={{
        padding:0,
        paddingBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1 ,
        maxWidth:320,
        ...textStyle
      }} 
      onPress={clickHandler}
      >

      <div
        style={{
          color: fontColour,
          fontSize: 16,
          fontFamily: 'Ebrima',
          textAlign: 'center',
        }}
        >

      { children }

      </div>
      

    </div>
   
  )
}

export default CaptionText;
