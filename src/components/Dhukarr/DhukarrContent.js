import React from 'react';

const DhukarrContent = ({ orientation, children, flex, arrow, align }) => {

    let cssClass = orientation === 'column' ? 
    'dhukarrSectionContent' : 'dhukarrSectionContentRow';
    if (align && align === 'center') {cssClass += ' dhukarrSectionRowCenter'}
    if (align && align === 'top') {cssClass += ' dhukarrSectionRowTop'}
    if (flex===2) {cssClass += ' dhukarrSectionContentWide'}
    if (arrow) {cssClass += ' dhukarrSectionContentArrow'}

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrContent;
