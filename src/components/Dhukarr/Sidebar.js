import React from 'react';
import SoundPlayer from '../SoundPlayer';
const Sidebar = ({ id, english, yolngu, language, audio, background }) => {

  const componentClass = background ? 'dhukarrSectionSideBar' : 'dhukarrSectionSideBar dhukarrSectionSideBarNoBg';
  return(

    <div className={componentClass} id={'sidebar'+id}>

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
