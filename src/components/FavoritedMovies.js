import { useEffect } from 'react'

// redux
import {useSelector} from 'react-redux'

// mui
import {
    Grid,
    Typography
} from '@mui/material';

// components
import MovieCard from './MovieCard'

export default function FavoritedMovies() {
    const liked = useSelector((state) => state.app.likedMovies)
    

    useEffect(() => {
        console.log('liked...', liked)
    })
    
    return (
        <Grid container spacing={2}>

            {
                liked.length > 0 ?
                    liked.map((movie, index) => {
                        return (
                            <MovieCard
                                movie={movie}
                                index={index}
                            />
                        )
                    })
                    :
                    <Typography variant='subtitle2' sx={{width: '100%',mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>'You have no favorite movies...'</Typography> 
            }
            </Grid>
    )
}

