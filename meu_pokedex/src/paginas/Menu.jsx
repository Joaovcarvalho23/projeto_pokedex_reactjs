import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import CartaPokemon from '../components/cartaPokemon'
import axios from 'axios'
import { Container, Grid, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'


//Plano de fundo
const styles = {
  backgroundImage: `url('/assets/background pokemon.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  display: 'flex',
  height: '100%',
  justifyContent: 'center'
};

export const Menu = ({setInfoPokemon}) => {
  //criando states
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState([]) //inicialmente será um array vazio
  useEffect(() => {
    buscarPokemons();
  }, []);

  //Função para a página das informações do Pokémon escolhido
  const paginaPokemonSelecionado = (infoPokemon) =>{
  setInfoPokemon(infoPokemon)
  navigate('/informacoes')
}
  
// Implementação adicional/bônus de campo de busca
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
    if (nomePokemon === '') buscarPokemons()

    //Caso seja passada alguma letra minúscula no campo de pesquisa
    const nomePokemonLowerCase = nomePokemon.toLowerCase()

    for (let i in pokemons) {
      const nomePokemonAtual = pokemons[i].data.name.toLowerCase()
      if (nomePokemonAtual.includes(nomePokemonLowerCase)) pokemonsFiltrados.push(pokemons[i])
    }
    setPokemons(pokemonsFiltrados)
  }

  return (
    <div style={{ height: '100%' }}>
      <Navbar filtrarPokemon={filtrarPokemon}/>
      <Container maxWidth={false} style={styles}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemons.map((meuPokemon) => (
            <Grid item xs={12} sm={2} md={2}>
              <Box onClick={() => paginaPokemonSelecionado(meuPokemon.data)}>
                <CartaPokemon name={meuPokemon.data.name} fotoPokemon={meuPokemon.data.sprites.front_default}/>
              </Box>  
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
