import React  from 'react';

import play from '../../assets/video.png';
//import ReactPlayer from 'react-player'

const CeremonyVideo = ({ video, title, colourClass}) => {

  if (!video) return;

 /* <ReactPlayer 
  width={100}
  height={50}
  url={video} />*/

  return(

    <iframe 
      src={`https://www.youtube.com/embed/${video}?rel=0`} 
      width="560" height="315" 
      style={{
        margin:'10px',
      }} 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen"/>

  )
}

export default CeremonyVideo;
