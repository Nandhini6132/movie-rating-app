
import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import Home from './components/Home/Home';
import { Header } from './components/header/Header';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDEtails/MovieDetail';
function App() {
  return (
    <div className="App" style={{backgroundColor: '#2b2e32'}}>
      <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movie/:imdbID' element={<MovieDetail />}/>
     </Routes>

     <Footer />
    </div>
  );
}

export default App;
