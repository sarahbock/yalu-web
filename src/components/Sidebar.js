import React from 'react';
import SoundPlayer from '../components/SoundPlayer';
const Sidebar = ({ id, english, yolngu, language, audio }) => {

  return(

    <div className='dhukarrSectionSideBar' id={'sidebar'+id}>

        <div className='sideBarText'>

            {id !=='0' && 
                <div className='sideBarTextNumber'>{id}</div>
            }

            { language ? 
                <>{yolngu ? yolngu : english} </> : 
                <>{english}</>
            }

            { audio && <SoundPlayer source={audio}/> }

    
        </div>

    </div>
  )
}

export default Sidebar;
