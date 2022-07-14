import movieAPI from '../utils/axiosAuth'

export const getAllPopularMovies = async () => {
    const endpoint = 'movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17'
    return await movieAPI().get(endpoint)
}