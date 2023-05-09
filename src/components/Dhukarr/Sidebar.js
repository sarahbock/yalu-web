import React from 'react';
import SoundPlayer from '../SoundPlayer';
const Sidebar = ({ id, english, yolngu, language, audio, background, showNumber }) => {

  const componentClass = background ? 'dhukarrSectionSideBar' : 'dhukarrSectionSideBar dhukarrSectionSideBarNoBg';
  return(

    <div className={componentClass} id={'sidebar'+id}>

        <div className='sideBarText'>

            {showNumber && 
                <div className='sideBarTextNumber'>{id}</div>
            }

            { language ? 
                <>{yolngu ? yolngu : english} </> : 
                <>{english}</>
            }

            { audio && 
            <div style={{marginTop:15}}>
              <SoundPlayer source={audio}/>
            </div>
             }

    
        </div>

    </div>
  )
}

export default Sidebar;
