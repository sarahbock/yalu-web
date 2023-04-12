import React from 'react';

const DhukarrContent = ({ orientation, children }) => {

    const cssClass = orientation === 'column' ? 'dhukarrSectionContent' : 'dhukarrSectionContentRow';

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrContent;
