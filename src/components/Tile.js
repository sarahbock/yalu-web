import React from 'react';
import dictionary from '../assets/scanning.png';
import blank from '../assets/sharing.png';
import share from '../assets/sharing.png';

const Tile = ({ id, label, onClick }) => {

  const link = "/"+id;

  let icon = share;
  switch ( id ) {
    case 'dictionary': icon=dictionary; break;
    case 'children': icon=share; break;
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
