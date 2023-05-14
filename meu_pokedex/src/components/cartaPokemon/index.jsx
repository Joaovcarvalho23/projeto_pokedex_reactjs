import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';


export default function CartaPokemon({name, fotoPokemon}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={fotoPokemon} alt="green iguana" />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {/* {typeHandler(types)} */}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
  // return (
  //   <Card sx={{ maxWidth: 345 }}>
  //     <CardMedia
  //       sx={{ height: 250 }}
  //       image={fotoPokemon}
  //       title="green iguana"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div" fontStyle={'oblique'}>
  //         {name}
  //       </Typography>
  //       {/* <Typography variant="body2" color="text.secondary">
  //         Lizards are a widespread group of squamate reptiles, with over 6,000
  //         species, ranging across all continents except Antarctica
  //       </Typography> */}
  //     </CardContent>
  //     {/* <CardActions>
  //       <Button size="small">Share</Button>
  //       <Button size="small">Learn More</Button>
  //     </CardActions> */}
  //   </Card>
  // );

  
}