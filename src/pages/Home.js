import {useEffect, useState} from 'react'
// components
import PopularMovies from '../components/PopularMovies'
import Backdrop from '../components/Backdrop'

export default function Home({ data, likedMovies, setLikedMovies }) {
    const [selectedMovie, setSelectedMovie] = useState(data[0])

    return (
        <>
        <Backdrop data={data} selectedMovie={selectedMovie} />
        <PopularMovies
                data={data}
                likedMovies={likedMovies}
                setLikedMovies={setLikedMovies}
                setSelectedMovie={setSelectedMovie}
                selectedMovie={selectedMovie}/>
            </>
    )
}