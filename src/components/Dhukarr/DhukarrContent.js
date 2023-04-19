import React from 'react';

const DhukarrContent = ({ orientation, children, flex, arrow }) => {

    let cssClass = orientation === 'column' ? 'dhukarrSectionContent' : 'dhukarrSectionContentRow';
    if (flex===2) {cssClass += ' dhukarrSectionContentWide'}
    if (arrow) {cssClass += ' dhukarrSectionContentArrow'}

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrContent;
