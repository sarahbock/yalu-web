import React from 'react';
import dictionary from '../assets/wordcloud.png';
import blank from '../assets/more.png';
import footprints from '../assets/human-footprints.png';
import school from '../assets/school.png';
import didge from '../assets/didgeridoo.png';
import more from '../assets/more.png';

const Tile = ({ id, label, onClick }) => {

  const link = "/"+id;

  let icon = blank; let bgClass = null;
  switch ( id ) {
    case 'dictionary': icon=dictionary; bgClass = 'homeTileBlobBlack'; break;
    case 'children': icon=footprints;  bgClass = 'homeTileBlobRed'; break;
    case 'auspathway': icon=school; bgClass = 'homeTileBlobPurple'; break;
    case 'ceremony': icon=didge; bgClass = 'homeTileBlobBrown'; break;
    default: icon=more; break;
  }

  return(

    <div className="homeTile" onClick={onClick}>

      <div className={`${'homeTileImage'} ${bgClass}`}>
        <img src={icon} className="homeIcon" alt={label}/>
      </div>

      <div className="homeTileText">{label}</div>

    </div>
  )
}

export default Tile;
