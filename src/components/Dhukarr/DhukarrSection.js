import React from 'react';

const DhukarrSection = ({ children, align }) => {

  const cssClass = align === 'top' ? 'dhukarrSection dhukarrSectionTop' : 'dhukarrSection';

  return(

    <div className={cssClass}>

        {children}

    </div>
  )
}

export default DhukarrSection;
