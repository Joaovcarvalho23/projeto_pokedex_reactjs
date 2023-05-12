import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import CartaPokemon from '../components/cartaPokemon'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

export const Menu = () => {
  //criando states
  const [pokemons, setPokemons] = useState([]) //inicialmente será um array vazio
  useEffect(() => {
    buscarPokemons();
  }, []);
  
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
  

  //TAMBÉM FUNCIONA...
  // useEffect(() => {
  //   buscarPokemons();
  // }, []);

  // const buscarPokemons = () => {
  //   var listaEndpoints = []
  //   for(let j = 1; j<152; j++){
  //     listaEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${j}/`)
  //   }
  //   console.log(listaEndpoints)
  //   var response = axios.all(listaEndpoints.map((endpoint) => axios.get(endpoint)))
  //   return response
  
    
  //   //fazendo a requisição à API (PokéApi)
  //   //axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((resposta) => {setPokemons(resposta.data.results)}).catch((erro) => {console.log(erro)})
  // }
  
  
  return (
   //<div>Menu alo</div>
   <div>
     <Navbar />
     <Container maxWidth = "false">

      <Grid container>
        {/* aqui dentro, vamos fazer um map para mapear as cartas de pokemons,
        pois o container será criado apenas uma vez, e o item será
        criado a cada iteração*/}
        {pokemons.map((meuPokemon) => (
          <Grid item xs = {2}>
            <CartaPokemon name = {meuPokemon.data.name} fotoPokemon = {meuPokemon.data.sprites.front_default}/>
          </Grid>))}
      </Grid>
     </Container>
   </div>
   
  )
}
