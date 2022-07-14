import axios from 'axios'

// ----------------------

const movieAPI = () => axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default movieAPI