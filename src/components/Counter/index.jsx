import { useState, useEffect } from 'react';
import { Container } from './styles';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    console.log('estou criando');

    useEffect(() => {
        console.log('estou dentro do efeito');
        console.log(counter);
    }, [counter]);

    function add() {
        console.log('+')
        setCounter(counter + 1)
        console.log(counter);
    }

    function sub() {
        console.log('-')
        setCounter(counter - 1)
    }

    return (
        <Container>
            <p>{counter}</p>
            <div>
                <button type="button" onClick={add}>+</button>
                <button type="button" onClick={sub}>-</button>
            </div>
        </Container>
    );
}