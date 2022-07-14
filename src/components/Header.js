// router
import { useNavigate } from 'react-router-dom'

// mui
import {
    AppBar,
    IconButton,
    Typography,
    Toolbar
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

// --------------------------

export default function Header() {
    const navigate = useNavigate()

    const handleNavOnClick = (path) => {
        navigate(`${path}`)
    }

    return (
        <AppBar position="static" sx={{backgroundColor: 'black'}}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
                </IconButton>
                <Typography variant="subtitle1" sx={{mr: 2, cursor: 'pointer'}} color="inherit" component="div"  onClick={() => handleNavOnClick('/')}>
                    Home
                </Typography>
                <Typography variant="subtitle1" color="inherit" component="div" onClick={() => handleNavOnClick('liked')} sx={{cursor: 'pointer'}}>
                    Favorited
                </Typography>
            </Toolbar>
    </AppBar>
    )
}