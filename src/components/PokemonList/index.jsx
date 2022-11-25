import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container"
import { PokemonModal } from "../PokemonModal";
import { List, PokemonCard, PokemonItem } from "./styles";

//    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
//    const json = await response.json();
//    console.log(json);

export const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon() {
            try {
                const response = await api.get('pokemon', {
                    params: {
                        limit: 151,
                        offset: 151 * page,
                    }
                });

                const { results, next, previous } = response.data

                setPokemon(results)
                setIsNextDisabled(!next)
                setIsPreviousDisabled(!previous)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }

        getPokemon();
    }, [page])

    async function getPokemonData(name) {
        const response = await api.get(`/pokemon/${name}`);

        setCurrentPokemon(response.data);
    }

    return (
        <Container>
            {loading && <div>Carregando...</div>}

            {
                currentPokemon && (
                  <PokemonModal currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon} /> 
                )
            }

            <div>
                <Button 
                    onClick={() => setPage(page - 1)}
                    disabled={isPreviousDisabled}
                >
                    Previous
                </Button>
                <Button 
                    onClick={() => setPage(page + 1)}
                    disabled={isNextDisabled}
                >
                    Next
                </Button>
            </div>

            <List>
                {
                    pokemon.map(item => 
                        <PokemonCard key={item.name}>
                            {item.name}

                            <Button onClick={() => getPokemonData(item.name)}>Ver</Button>
                        </PokemonCard>
                    )
                }
            </List>
        </Container>
    )
}