import { ToastContainer } from 'react-toastify';
import { PokemonList } from './components/PokemonList';
import Global from './styles/global';
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <Global />
      <PokemonList />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Counter /> */}
    </>
  );
};