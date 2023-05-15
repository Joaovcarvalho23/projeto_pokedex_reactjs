//Função auxiliar que determina se um Pokémon possui um ou dois tipos
export const tiposDePokemon = function(tipos){
    if(tipos[1]) return 'Este Pokémon possui dois tipos: ' + tipos[0].type.name + " e " + tipos[1].type.name
    return 'Este Pokémon possui apenas um tipo: ' + tipos[0].type.name
}