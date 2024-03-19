import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState()
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(fetchAsyncMovies(searchTerm))
    dispatch(fetchAsyncShows(searchTerm))
  }
  return (
    <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid ms-5">
  <Link class="navbar-brand text-light" href="/">Movie App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
      <ul class="navbar-nav">
      <form class="d-flex me-5" onSubmit={handleSubmit} role="search">
        <input class="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
       
      </ul>
    </div>
  </div>
</nav>
  )
}
