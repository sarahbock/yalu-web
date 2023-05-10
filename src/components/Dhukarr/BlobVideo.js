import React  from 'react';

import play from '../../assets/video.png';
import ReactPlayer from 'react-player'

const BlobVideo = ({ video, colourClass}) => {

  if (!video) return;

 /* <ReactPlayer 
  width={100}
  height={50}
  url={video} />*/

  return(

    <>

     <a href={`${video}`} rel="noreferrer" target='_blank'>
        <img src={play} alt="Play" className="videoIcon"/> 
      </a>

      </>

   

  )
}

export default BlobVideo;
