import React from 'react';

const DhukarrSection = ({ children, align }) => {

  const cssClass = align === 'center' ? 'dhukarrSection dhukarrSectionCenter' : 'dhukarrSection';

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrSection;
