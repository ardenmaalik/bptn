import { useEffect, useState } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import {setLikedMovies, removeLikedMovie} from '../redux/slices/appSlice'

// mui
import {
    Box,
    Card,
    Grid,
    Stack,
    Switch,
    Typography,
    CardMedia,
    CardContent,
    Avatar,
    FormControlLabel,
    Collapse,
    Table,
    TableContainer,
    TableBody,
    Container,
    TableRow,
    TableCell,
    Button,
    DialogTitle,
    IconButton,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MovieCard({ movie, setSelectedMovie, selectedMovie }) {
    const dispatch = useDispatch()
    const liked = useSelector((state) => state.app.likedMovies)
    
    const [favoriteIconColor, setFavoriteIconColor] = useState('white')

    const handleFavoriteIconOnClick = (id) => {
        if (favoriteIconColor !== 'red' ) {
            setFavoriteIconColor('red')
            dispatch(setLikedMovies(movie))
        } else { 
            setFavoriteIconColor('grey')
            dispatch(removeLikedMovie(movie))
        }

    }

    const handleMovieCardOnClick = () => {
        setSelectedMovie(movie)
    }

    return (
        <Grid item={{ py: 10, px: 3 }}>
            <Card sx={{position: 'relative', mt: 2, textAlign: 'center' }} onClick={handleMovieCardOnClick}>
                            <CardMedia
                                component='img'
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            sx={{ height: 250, width: 180, cursor: 'pointer'}} alt='poster'
                        />
                        {/* <CardContent>
                            <Typography variant='body2'>{movie.title}</Typography>
                        </CardContent> */}
                <IconButton sx={{ position: 'absolute', top: 0, left: 25}} onClick={() => handleFavoriteIconOnClick(movie.id)}>
                    <FavoriteIcon sx={{color: `${favoriteIconColor}` }} />
                        </IconButton>
                </Card>
                </Grid>
    )
}