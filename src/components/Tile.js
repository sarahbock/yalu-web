import React from 'react';
import dictionary from '../assets/wordcloud.png';
import blank from '../assets/more.png';
import child from '../assets/human-footprints.png';

const Tile = ({ id, label, onClick }) => {

  const link = "/"+id;

  let icon = blank;
  switch ( id ) {
    case 'dictionary': icon=dictionary; break;
    case 'children': icon=child; break;
  }

  return(

    <div className="homeTile" onClick={onClick}>

      <div className="homeTileImage">
        <img src={icon} className="homeIcon" alt={label}/>
      </div>

      <div className="homeTileText">{label}</div>

    </div>
  )
}

export default Tile;
