import React from 'react';

const DhukarrContent = ({ orientation, children, flex }) => {

    let cssClass = orientation === 'column' ? 'dhukarrSectionContent' : 'dhukarrSectionContentRow';
    if (flex===2) {cssClass += ' dhukarrSectionContentWide'}

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrContent;
