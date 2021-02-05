import React , { createContext , useState } from 'react'

// crear el context

export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) =>{
    const [hola, setHola] = useState('Hola desde state');

    return (
        <CategoriasContext.Provider
            value={{
                hola,setHola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;
