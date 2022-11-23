import './App.css';
import { PokemonList } from './components/PokemonList';
import Global from './styles/global';

export const App = () => {
  return (
    <>
      <Global />
      <PokemonList />
    </>
  );
};