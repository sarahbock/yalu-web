import React, {useState, useRef, useEffect} from 'react';



const BlobText = ({ children, clickHandler, className, fontStyle }) => {



  return(

    <div className = {className} onClick={clickHandler} style={fontStyle}>

      { children }

    </div>
   
  )
}

export default BlobText;
