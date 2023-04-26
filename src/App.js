import * as React from "react";
import { Routes, Route } from "react-router-dom";


import Launch from './screens/Launch';
import Home from './screens/Home';
import Dictionary from './screens/Dictionary';
import Dhukarr from './screens/Dhukarr';
import AustralianEducation from './screens/AustralianEducation';
import Ceremony from './screens/Ceremony';
import DictionaryEntry from './screens/DictionaryEntry';
import Privacy from './screens/Privacy';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="home" element={<Home />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="dictionaryentry" element={<DictionaryEntry />} />
        <Route path="dhukarr" element={<Dhukarr />} />
        <Route path="auspathway" element={<AustralianEducation />} />
        <Route path="ceremony" element={<Ceremony />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
  );
}

export default App;
