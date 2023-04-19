import React, {useState} from 'react';
import blobarrow from '../../assets/dhukarr/blobs_blob4-arrow.png';
const BlobArrow = ({ id, style }) => {
    return(

        <img 
        src={blobarrow} 
        className="blobArrowImage" 
        alt=""
        style={{
            ...style,
          }}
        />

    )
}

export default BlobArrow;