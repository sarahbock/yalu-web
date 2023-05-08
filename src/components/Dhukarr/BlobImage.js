import React from 'react';


const BlobImage = ({ source, clickHandler, style}) => {

  return(

    <div 
      onPress={clickHandler}
      style={{
        padding:0,
      }}
      >

      <img
      src={source}
      style={{
          ...style
        }}
      />

      </div>
      
  )
}

export default BlobImage;

