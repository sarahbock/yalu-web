import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


import Launch from './screens/Launch';
import Home from './screens/Home';
import Dictionary from './screens/Dictionary';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="home" element={<Home />} />
        <Route path="dictionary" element={<Dictionary />} />
      </Routes>
  );
}

export default App;
