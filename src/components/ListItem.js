import React from 'react';

import SoundPlayer from '../components/SoundPlayer';

const ListItem = ({ item, onClick }) => {

  const audioSource = item?.titleaudio?.src ?? null;

  return(

    <div className="listItemHolder">

      <div className="listItemText" onClick={()=>onClick(item)}>{item.title}</div>

      <div className="listItemAudio">

        <SoundPlayer source={audioSource}/>

      </div>

    </div>
  )
}

export default ListItem;
