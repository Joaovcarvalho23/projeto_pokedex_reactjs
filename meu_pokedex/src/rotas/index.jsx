import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from '../paginas/Menu'
import { PerfilPokemon } from '../paginas/PerfilPokemon'

export const RotasParaInformacoes = () => {
  const [infoPokemon, setInfoPokemon] = useState()
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu setInfoPokemon = {setInfoPokemon}/>} />
            <Route path='/informacoes' element={<PerfilPokemon infoPokemon = {infoPokemon}/>} />
        </Routes>
    </BrowserRouter>
  )
}