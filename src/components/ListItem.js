import React from 'react';
import play from '../assets/play.png';
import pause from '../assets/pause.png';

const ListItem = ({ key, item, onClick }) => {

  return(

    <div className="listItemHolder">

      <div className="listItemText" onClick={()=>onClick(item)}>{item.title}</div>

      <div className="listItemAudio">
        <img src={play} className="listItemAudioIcon" alt="Play"/>
      </div>

    </div>
  )
}

export default ListItem;
