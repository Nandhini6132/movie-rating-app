import React from 'react'
import {useSelector} from 'react-redux'
// import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieListing/MovieListing.css'


const MovieListing = () => {

  const movies = useSelector(state=>state.movies.movies.Search)
  const status = useSelector(state=>state.movies.status)

  //shows
  const shows = useSelector(s=>s.movies.shows.Search)
  console.log(shows)
  
 
 

   if(status==='loading'){
    return <p style={{color:'white'}}>Loading...</p>
   }

   
 return (
  <>
  <div className="movie-wrapper">
    <div className="movie-list">
        <h3 className='text-light'>Movies </h3>
      <div className="movie-container mt-5"> 
       {movies?.map((movie, index) => (
    <MovieCard key={index} data={movie} />
    ))}</div>
    </div>
  </div>


  <div className="shows-wrapper">
    <div className="show-list">
        <h3>Shows </h3>
      <div className="show-container mt-5"> 
       {shows?.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))}</div>
    </div>
  </div>
  </>
);

}

export default MovieListing