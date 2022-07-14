// mui
import {
    Container,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
    Typography,
    IconButton
} from '@mui/material'



export default function Backdrop({ selectedMovie }) {

    return (
        <Container style={{ position: 'sticky', top: 0, padding: 0, margin: 0, maxWidth: '100%' }} sx={{p: 0, m: 0, width: '100%', display: 'flex', justifyContent: 'start'}}>
            <Box sx={{p: 2, width: '60%', backgroundColor: 'black', minWidth: '500px', color: 'white'}}>
                <Typography variant='h3' sx={{mt: 5, ml: 3, minWidth: '30%'}}>{selectedMovie.title}</Typography>
                    <Stack sx={{ml: 3, display: 'flex', flexDirection: 'row', width: '45%', color: 'gray'}}>
                        <Typography variant='h6' sx={{pr: 2}}>2022</Typography>
                    <Typography variant='h6'>{`Movie Score: ${selectedMovie.vote_average}`}</Typography>
                        </Stack>
                <Typography variant='body1' sx={{ mt: 1, ml: 3, width: '550px', minWidth: '450px', fontWeight: '500' }}>{selectedMovie.overview}</Typography>
                </Box>
            <Card sx={{ textAlign: 'left', width: '75%', height: '100%'}}>
        <CardMedia
            component='img'
            src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
            sx={{ objectFit: 'cover', height: '600px', width: '100%', minWidth: '500px'}} alt='poster'
            />
       
                </Card>
    </Container>
  )
}
