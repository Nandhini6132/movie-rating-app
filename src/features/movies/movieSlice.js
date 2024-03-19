import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    movies: {},
    shows:{},
    showormovie:{},
    status:'idle'
}



export const fetchAsyncMovies = createAsyncThunk('movies/get', async(term)=>{
    const response = await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=63ba76a2
    `)
    return (response.data)
  
})

//shows
export const fetchAsyncShows = createAsyncThunk('Shows/get', async(term)=>{
    const response = await axios.get(`http://www.omdbapi.com/?s=${term}&star&type=series&apikey=63ba76a2
    `)
    return (response.data)  
})

//shows or movies
export const fetchAsyncShowOrMovie = createAsyncThunk('ShowOrMovie/get', async(id)=>{
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&Plot=Full&apikey=63ba76a2
    `)
    return (response.data)  
})
const movieSlice =createSlice({
    name: 'movies',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAsyncMovies.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchAsyncMovies.fulfilled, (state,action)=>{
             state.movies = action.payload
             state.status = 'idle'
        })
        .addCase(fetchAsyncShows.fulfilled, (state,action)=>{
            state.shows = action.payload
            state.status = 'idle'
       })
       .addCase(fetchAsyncShowOrMovie.fulfilled, (state,action)=>{
        state.showormovie = action.payload
        state.status = 'idle'
   })

        
    }
})

export const {addMovies} = movieSlice.actions
// export const getAllMovies = (state)=>state.movies.movies.Search
export default movieSlice.reducer