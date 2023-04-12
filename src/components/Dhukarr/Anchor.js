import React from 'react';

const Anchor = ({ id }) => {

  const classId = 'section'+id;

  return(

    <a name={classId} href={classId} id={classId}></a>
  )
}

export default Anchor;
