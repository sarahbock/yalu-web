import React from 'react';
import dictionary from '../assets/wordcloud.png';
import blank from '../assets/more.png';
import footprints from '../assets/human-footprints.png';
import school from '../assets/school.png';
import didge from '../assets/didgeridoo.png';
import more from '../assets/more.png';

const Tile = ({ id, label, onClick }) => {

  const link = "/"+id;

  let icon = blank;
  switch ( id ) {
    case 'dictionary': icon=dictionary; break;
    case 'children': icon=footprints; break;
    case 'auspathway': icon=school; break;
    case 'ceremony': icon=didge; break;
    default: icon=more; break;
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
