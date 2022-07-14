import {Suspense, lazy } from 'react'

// router
import { useRoutes, useLocation } from 'react-router-dom'

// components
import LoadingScreen from '../components/LoadingScreen'

// --------------

const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();
  
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function Router({data, likedMovies, setLikedMovies}) {

    return useRoutes([
    
    // Main Routes
        { path: '/', element: <Home data={data} likedMovies={ likedMovies } setLikedMovies={setLikedMovies} /> },
        { path: 'liked', element: <LikedMovies />}
    ])
}

//Main
const Home = Loadable(lazy(() => import('../pages/Home')))
const LikedMovies = Loadable(lazy(() => import('../pages/LikedMovies')))