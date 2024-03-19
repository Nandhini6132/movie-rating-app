import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieAPI from '../../common/APIs/MovieAPI'
import { APIkey } from '../../common/APIs/MovieAPIkey'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import { fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice'
const Home = () => {

  const dispatch = useDispatch()
  const movieTerm = 'harry'
  const showTerm = 'friends'

  useEffect(()=>{
       dispatch(fetchAsyncMovies(movieTerm))
       dispatch(fetchAsyncShows(showTerm))
  },[])
  return (
    <>
    <div className='container-fluid'>
    <MovieListing />
    </div>
    </>
  )
}

export default Home