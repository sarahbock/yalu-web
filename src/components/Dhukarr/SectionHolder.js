import React from 'react';

const SectionHolder = ({ id, children }) => {

  const classId = 'section'+id+"Holder";

  return(

    <div className={`${'bgHolder'} ${classId}`}>

        {children}

    </div>
  )
}

export default SectionHolder;
