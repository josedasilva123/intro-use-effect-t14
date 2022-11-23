import { useState, useEffect } from 'react';

import './styles.css'

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    console.log('estou criando');

    useEffect(() => {
        console.log('estou dentro do efeito');
    }, []);

    function add() {
        console.log('+')
        setCounter(counter + 1)
    }

    function sub() {
        console.log('-')
        setCounter(counter - 1)
    }

    return (
        <div className='container'>
            <p>{counter}</p>
            <div>
                <button type="button" onClick={add}>+</button>
                <button type="button" onClick={sub}>-</button>
            </div>
        </div>
    );
}