import * as React from "react";
import { Routes, Route } from "react-router-dom";


import Launch from './screens/Launch';
import Home from './screens/Home';
import Dictionary from './screens/Dictionary';
import Dhukarr from './screens/Dhukarr';
import DictionaryEntry from './screens/DictionaryEntry';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="home" element={<Home />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="dictionaryentry" element={<DictionaryEntry />} />
        <Route path="dhukarr" element={<Dhukarr />} />
      </Routes>
  );
}

export default App;
