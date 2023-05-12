import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import CartaPokemon from '../components/cartaPokemon'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

export const Menu = () => {
  //criando states
  const [pokemons, setPokemons] = useState([]) //inicialmente será um array vazio

  useEffect(() => buscarPokemons())

  const buscarPokemons = function () {
    //fazendo a requisição à API (PokéApi)
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((resposta) => {setPokemons(resposta.data.results)}).catch((erro) => {console.log(erro)})
  }
  
  
  return (
   //<div>Menu alo</div>
   <div>
     <Navbar />
     <Container maxWidth = "false">

      <Grid container>
        {/* aqui dentro, vamos fazer um map para mapear as cartas de pokemons,
        pois o container será criado apenas uma vez, e o item será
        criado a cada iteração*/}
        {pokemons.map((meuPokemon) => (<Grid item xs = {3}><CartaPokemon name = {meuPokemon.name}/></Grid>))}
      </Grid>
     </Container>
   </div>
   
  )
}
