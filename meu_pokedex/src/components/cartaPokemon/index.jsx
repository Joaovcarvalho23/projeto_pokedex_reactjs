import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function CartaPokemon({name, fotoPokemon}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={fotoPokemon} alt="green iguana" />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div"> {name} </Typography>
            <Typography gutterBottom variant="caption" component="div">
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}