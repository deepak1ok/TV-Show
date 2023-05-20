import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import TVSeries from "./Components/TVSeries";
import Error from "./Components/Error";
import Details from "./Components/Details";

import About from "./Components/About";
const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvseries' element={<TVSeries />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:movieid:/mediatype' element={<Details />} />
          <Route element={<Error />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
