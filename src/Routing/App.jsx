import React from "react";
import NavBar from "../NavBarContainer/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../NavBarComponents/Home";
import Movies from "../NavBarComponents/Movies";
import TVSeries from "../NavBarComponents/TVSeries";
import Error from "../NavBarComponents/Error";
import Details from "../DetailsComponent/Details";
import Search from "../Search";
import About from "../NavBarComponents/About";
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
          <Route path='/details/:movieid/:mediatype' element={<Details />} />
          <Route path='/search' element={<Search />} />
          <Route element={<Error />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
