import React from 'react';

const SectionHolder = ({ id, children, bg, style }) => {

  const classId = 'section'+id+"Holder";

  const bgColor = bg ? bg+'d4' : 'none';


  return(

    <div className={`${'bgHolder'} ${classId}`}
    style={{
      backgroundColor: bgColor,
      ...style
      }}>

        {children}

    </div>
  )
}

export default SectionHolder;
