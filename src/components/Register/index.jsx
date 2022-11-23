import { useState } from "react";

export const Register = ({ setUsers }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            name,
            age
        }

        setUsers((oldUsers) => [...oldUsers, user]);
        setName('');
        setAge('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name} 
                onChange={event => setName(event.target.value)}
            />
            <input 
                type="text" 
                value={age}
                onChange={event => setAge(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
        </form>
    )
}