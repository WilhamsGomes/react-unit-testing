import { useState } from "react"

function App() {

    const [list, setList] = useState(['Diego', 'Rodz', 'Mayk']);
    const [name, setName] = useState<string>('');

    function addToList(){
        setList(state => [...state, 'Novo'])
    }

    function addName(){
        setList(state => [...state, name])
    }

    return (
        <>
            <button onClick={addToList}>Adicionar</button>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
            <input 
                type="text" 
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="name"
            />
            <button onClick={addName}>Novo nome</button>
        </>
    )
}

export default App
