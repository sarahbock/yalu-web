import React, { useState, useEffect } from 'react';

import { db } from '../config';
import { collection, query, getDocs } from 'firebase/firestore';

import TopNav from '../components/TopNav';

const Dictionary = () => {

  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const [entries, setEntries] = useState([]);

  //when user clicks the search icon clear to show or hide search bar
  //reset search term
  const toggleSearch = () => {
    setSearchTerm('')
    setShowSearch(!showSearch);
  }

  //get entries from firestore and store in state
  const getData = async() => {
    const entriesArray=[];
    const querySnapshot = await getDocs(collection(db, "entries"));
    querySnapshot.forEach((doc) => {
      entriesArray.push(doc.data());
    });
    setEntries(entriesArray);
  }

  //render entries as list
  const renderEntries = () => {
    return (
      <>
      {searchResults.map( (item,idx) =>
        <div key={idx} className="listItem">{item.title}</div>
      )}
      </>
    )
  }

  //filter data when search term changes
  const filterData = data => {
    const searchResult = data.filter(item =>
      (
        !searchTerm && item ||
        item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    return searchResult
  }

  /**
    * listens for changes to search term and / or entries
    * search results will only be rendered after the user doesn't type for 500ms
    */
    useEffect(() => {
      if (!entries) return
      const timerId = setTimeout(
        () => {
          setSearchResults(filterData(entries))
        }, 500
      );
      return () => {
        clearTimeout(timerId);
      };
    }, [entries, searchTerm])

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    //get data after component has loaded
  useEffect(() => {
    getData();
  }, [db]);

  return(
    <div className="container dictionaryScreen">

      <TopNav toggleSearch={toggleSearch}/>

      <div className="searchBar">

        {showSearch &&
          <input id="searchTerm" maxLength="30" defaultValue={searchTerm} placeholder='Search' onChange={handleChange}  />
        }

        {searchResults?.length>0 && renderEntries()}

      </div>


    </div>
  )
}

export default Dictionary;
