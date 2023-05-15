import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 1,
  marginRight: 670,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({filtrarPokemon, esconderSearchBar}) {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "0em"}}>
      
      <AppBar position="static" style={{backgroundColor: "green"}}>
     
      <Toolbar>
  <Grid container spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
    <Grid item xs={2}>
      <Box component='img' src='/assets/logo-pokedex-1.png' height='3em' width='3em'/>
    </Grid>
    <Grid item xs={10} md={6} sx={{ textAlign: 'center' }}>
      {esconderSearchBar ? null : (
        <Search onChange={(evento) => filtrarPokemon(evento.target.value)}>
          <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
          <StyledInputBase placeholder="Buscar Pokémon" inputProps={{ 'aria-label': 'search' }}/>
        </Search>
      )}
    </Grid>
  </Grid>
  <Typography variant="h6" noWrap component="div" sx={{cursor: 'pointer'}} onClick={() => navigate('/')}>
    <Box component='img' src='/assets/home.png' height='3em' width='3em'/>
  </Typography>
</Toolbar>
      </AppBar>
    </Box>
  );
}