import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from '../paginas/Menu'
import { PerfilPokemon } from '../paginas/PerfilPokemon'

export const RotasParaInformacoes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/informacoes' element={<PerfilPokemon />} />
        </Routes>
    </BrowserRouter>
  )
}
