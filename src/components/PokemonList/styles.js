import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
`

export const PokemonCard = styled.li`
    padding: 2rem;
    background: #fff;
    border: 1px solid red;
    border-radius: 3px;
`

export const PokemonItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   width: 140px;
   min-height: 150px;
   margin: auto;

   border-radius: 20px;
   border: 1px solid #f10;
`