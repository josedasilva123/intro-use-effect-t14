import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "../../styles/Container"
import { List, PokemonCard } from "./styles";

//    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
//    const json = await response.json();
//    console.log(json);
export const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemon() {
            try {
                const response = await api.get('pokemon', {
                    params: {
                        limit: 151,
                        offset: 0,
                    }
                });

                setPokemon(response.data.results)

            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }

        getPokemon();
    }, [])

    return (
        <Container>
            {loading && <div>Carregando...</div>}
            <List>
                {
                    pokemon.map(item => 
                        <PokemonCard key={item.name}>{item.name}</PokemonCard>
                    )
                }
            </List>
        </Container>
    )
}