import React, { useState, useEffect } from 'react'
import { getAllPopularMovies } from './services/movies.service'
import Router from './routes'
import Header from './components/Header'

function App() {
    const [data, setData] = useState([])
    const [likedMovies, setLikedMovies] = useState([])
    

    const initData = async () => {
        await getAllPopularMovies().then(({ data }) => {
            setData(data.results)
            console.log(data.results)
        })
    }

    useEffect(() => {
        initData()
    }, [])

    return (
        <>
            <Header/>
            <Router data={data} likedMovies={likedMovies} setLikedMovies={setLikedMovies} />
        </>
  )
}

export default App