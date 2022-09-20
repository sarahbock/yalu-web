import React from 'react';

const ItemNav = ({ onClick, page, totalPages }) => {

  return(

    <div className="itemNavHolder">

    <div className="itemNav" onClick={()=>onClick(1)}>
      <div className={`${'itemNavBall'} ${page===1&&'itemNavBallFilled'}`}>|</div>
    </div>

    <div className="itemNav" onClick={()=>onClick(2)}>
      <div className={`${'itemNavBall'} ${page===2&&'itemNavBallFilled'}`}>||</div>
    </div>

    <div className="itemNav" onClick={()=>onClick(3)}>
      <div className={`${'itemNavBall'} ${page===3&&'itemNavBallFilled'}`}>|||</div>
    </div>

    </div>
  )
}

export default ItemNav;
