import React, { useState, useEffect } from 'react';

import { useLocation } from "react-router-dom";
import TopNav from '../components/TopNav';
import ItemNav from '../components/ItemNav';

const DictionaryEntry = () => {

  const { state } = useLocation();
  const { item } = state;

  console.log(item)

  return(
    <div className="container dictionaryScreen">

    <TopNav title={item?.title ?? 'Entry'} back play/>

    <ItemNav/>

      {item?.title ?? 'entry'}

    </div>
  )
}

export default DictionaryEntry;
