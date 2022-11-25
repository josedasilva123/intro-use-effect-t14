import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useOutClick } from "../../hooks/useOutClick";
import { PokemonItem } from "../PokemonList/styles";
import { Modal, ModalBox } from "./styles";

export const PokemonModal = ({ currentPokemon, setCurrentPokemon }) => {
    const modalRef = useOutClick(
        () => setCurrentPokemon(null)
    );

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    }, [counter])
   /*
   const modalRef = useRef(null); 

   useEffect(() => {
      function modalOutClick(event) {
        const target = event.target;
        const element = modalRef.current;

        if(!element.contains(target)){
            setCurrentPokemon(null);
        }       
      }

      window.addEventListener("mousedown", modalOutClick);
   
     
      return () => {
         window.removeEventListener("mousedown", modalOutClick);
      };
   }, []);
   */

   /* Onde acontece? No componente que você criou o efeito */

   /* montagem: quando o HTML de componente é construído */
   /* demonstagem: quando o HTML do componente é destruido */
   /* atualização: quando a variáveis (OU AS VARIÁVEIS) da lista de dependência se alteram */

   return (
      <Modal>   
 
         <ModalBox ref={modalRef}>
            <button onClick={() => setCounter(counter + 1)}>Atualizar</button>
            <button onClick={() => toast.error("Olha só!")}>Chama o toast pa noes</button>
            <button onClick={() => setCurrentPokemon(null)}>Fechar</button>
            <PokemonItem>
               <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
               <span>{currentPokemon.name}</span>
            </PokemonItem>
         </ModalBox>
      </Modal>
   );
};
