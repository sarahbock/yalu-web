import React, { useState, useEffect, useCallback } from 'react';

import { db } from '../config';
import { collection, getDocs, orderBy } from 'firebase/firestore';

import { useNavigate } from "react-router-dom";

import TopNav from '../components/TopNav';
import ListItem from '../components/ListItem';

const Dictionary = () => {

  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [entries, setEntries] = useState([]);

  const navigate = useNavigate();

  //when user clicks the search icon clear to show or hide search bar
  //reset search term
  const toggleSearch = () => {
    setSearchTerm('')
    setShowSearch(!showSearch);
  }

  const openEntry = (item) => {
    navigate('/dictionaryentry', { state: { item: item } });
    //console.log('opens dictionary entry',item)
  }

  //get entries from firestore and store in state
  const getData = async() => {
    setLoading(true);
    const entriesArray=[];
    const querySnapshot = await getDocs(
      collection(db, "entries")
      );
    querySnapshot.forEach((doc) => {
      entriesArray.push(doc.data());
    });
    entriesArray.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })
    setEntries(entriesArray);
    setLoading(false);
  }

  //render entries as list
  const renderEntries = () => {
    return (
      <>
      {searchResults.map( item =>
        <ListItem key={item.id} item={item} onClick={openEntry}/>
      )}
      </>
    )
  }

  //filter data when search term changes
  const filterData = useCallback((data) => {
    const searchResult = data.filter(item =>
      (
        (!searchTerm && item) ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    return searchResult
    }, [searchTerm]);

  /**
    * listens for changes to search term and / or entries
    * search results will only be rendered after the user doesn't type for 200ms
    */
    useEffect(() => {
      if (!entries) return
      const timerId = setTimeout(
        () => {
          setSearchResults(filterData(entries))
        }, 200
      );
      return () => {
        clearTimeout(timerId);
      };
    }, [entries, searchTerm, filterData])

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    //get data after component has loaded
  useEffect(() => {
    getData();
  }, []);

  return(
    <div className="container black dictionaryScreen">

      <TopNav toggleSearch={toggleSearch} back title="Balandaw dhäruk Yolŋukurr mayali" colour='black'/>

      <div className='contentContainer'>
        
      {showSearch &&
          <div className="searchBar">
            <input id="searchTerm" maxLength="30" defaultValue={searchTerm} placeholder='Search' onChange={handleChange}  />
          </div>
        }

        {loading && <div className="loading">Loading</div>}

        {searchResults && renderEntries()}


      </div>

        
    </div>
  )
}

export default Dictionary;
