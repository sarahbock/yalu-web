import React, {useState, useRef, useEffect} from 'react';



const BlobText = ({ children, clickHandler, className }) => {



  return(

    <div className = {className} onClick={clickHandler}>

      { children }

    </div>
   
  )
}

export default BlobText;
