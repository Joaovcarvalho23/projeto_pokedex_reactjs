import React from 'react'
import Navbar from '../components/navbar'
import { Box, Chip, Container, Divider, Typography } from '@mui/material'
import { tiposDePokemon } from '../components/utils'

//Background da página de informações do Pokémon
const styles = {
  backgroundImage: `url('/assets/background pokemon.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  display: 'flex',
  height: '100%',
  justifyContent: 'center'
};

export const PerfilPokemon = ({infoPokemon}) => {
  const {types, moves} = infoPokemon
  return (
    <>
      <Navbar esconderSearchBar />
        <Container style={styles}>
          <Container maxWidth = "false">
            <Box component= 'img' src={infoPokemon.sprites.front_default} width='30%'></Box>
            <Typography variant='h6' fontFamily={'monospace'} style={{backgroundColor: 'green'}}>Nome do Pokémon: {infoPokemon.name}</Typography>
            <Typography variant='h6' fontFamily={'monospace'} style={{backgroundColor: 'green'}}>Peso do Pokémon: {infoPokemon.weight} g</Typography>
            <Typography variant='h6' fontFamily={'monospace'} style={{backgroundColor: 'green'}}>Altura do Pokémon: {infoPokemon.height} cm</Typography>
            <Typography variant='h6' fontFamily={'monospace'} style={{backgroundColor: 'green'}}>{tiposDePokemon(types)}</Typography>
            <Box width='100%'>
              <Divider variant='h6' fontFamily={'monospace'} style={{backgroundColor: 'green'}}>*Variações deste Pokémon*</Divider>
              <Box component= 'img' src={infoPokemon.sprites.front_female} width='15%' style={{backgroundColor: 'green'}}></Box>
              <Box component= 'img' src={infoPokemon.sprites.front_shiny} width='15%' style={{backgroundColor: 'green'}}></Box>
              <Box component= 'img' src={infoPokemon.sprites.front_shiny_female} width='15%' style={{backgroundColor: 'green'}}></Box>
              <Divider style={{backgroundColor: 'green'}}>*Ataques deste Pokémon*</Divider>
              {moves.map((listaDeAtaques) => (
                <Chip label={listaDeAtaques.move.name} style={{backgroundColor: 'gray'}}></Chip>))
              }
            </Box>
          </Container>
        </Container>
    </>
  )
}
