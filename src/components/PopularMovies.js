import {useState} from 'react'

// mui
import {
    Grid,
} from '@mui/material';
import { useEffect } from 'react';

// components
import MovieCard from './MovieCard'

export default function PopularMovies({ data, likedMovies, setLikedMovies, setSelectedMovie, selectedMovie }) {

    
    return (
        <Grid xs={12} container spacing={2} justifyContent='start' flexWrap='wrap' sx={{ml: 5}}>
        {
        data.map((movie, index) => {
            return (
                <MovieCard
                    movie={movie}
                    index={index}
                    likedMovies={likedMovies}
                    setLikedMovies={setLikedMovies}
                    setSelectedMovie={setSelectedMovie}
                    selectedMovie={selectedMovie}
                
                     />
            )
        })
            }
            </Grid>
    )
}

