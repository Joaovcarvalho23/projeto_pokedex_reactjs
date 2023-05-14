import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import CartaPokemon from '../components/cartaPokemon'
import { Container, Grid, Box } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


//Plano de fundo
const styles = {
    backgroundImage: `url('/assets/background pokemon.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-y',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center'
}

export const Menu = ({setInfoPokemon}) => {
  //criando states
  // const navigate = useNavigate()
  const [pokemons, setPokemons] = useState([]) //inicialmente será um array vazio
  const navigate = useNavigate()

  useEffect(() => {
    buscarPokemons();
  }, []);
  
// Implementação adicional/bônus de filtragem no campo de busca
  const buscarPokemons = async function () {
    try {
      const listaEndpoints = [];
      for(let j = 1; j < 152; j++) {
        listaEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${j}/`);
      }
      console.log(listaEndpoints);
      let responses = await Promise.all(listaEndpoints.map((endpoint) => axios.get(endpoint))).then((resposta) => /*console.log para testar*/setPokemons(resposta));
      console.log(responses);
    } catch (error) {
      console.error(error);
    }
  };

  //Implementação adicional/bônus de filtragem no campo de busca
const filtrarPokemon = (nomePokemon) => {
  let pokemonsFiltrados = []
  //console.log(nomePokemon[i])
  if(nomePokemon === '') buscarPokemons()
  for(let i in pokemons){
    if (pokemons[i].data.name.includes(nomePokemon)) pokemonsFiltrados.push(pokemons[i])
  } 
  console.log(pokemonsFiltrados)
  setPokemons(pokemonsFiltrados)
}

const pokemonPickHandler = (pokemonData) =>{
  setInfoPokemon(pokemonData)
  navigate('/informacoes')
}
  
  return (
   <div >
     <Navbar filtrarPokemon={filtrarPokemon}/>
     <Container maxWidth = "false" style={styles}>
     {/* <Container maxWidth = "false" style={{backgroundColor: "yellow"}}> */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          {pokemons.map((meuPokemon) => (
            <Grid item xs = {12} sm = {2} md = {2}>
              <Box onClick={() => pokemonPickHandler(meuPokemon.data)}>
                <CartaPokemon name = {meuPokemon.data.name} 
                fotoPokemon = {meuPokemon.data.sprites.front_default}/>
              </Box>  
            </Grid>))}
         </Grid>
     </Container>
   </div>
   
  )
}
