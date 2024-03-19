import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import '../MovieCard/MovieCard.css'


const MovieCard = ({data}) => {
  

 
  console.log(data.imdbID)
  console.log(typeof(data.imdbID))
  
    return (
    
      <Link to={`/movie/${data.imdbID}`}>
      
       <Card className='card'  sx={{ maxWidth: 345, justifySelf: 'center',background: '#2b2e32', textDecoration:'none'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={data.Poster}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.Title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {data.Year}
            </Button>
          </CardActions>
        </Card>
  
      </Link>
         
    
      );
}

export default MovieCard