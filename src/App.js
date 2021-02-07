import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriasContext'
import RecetasContext from './context/RecetasContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasContext>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
        </div>
      </RecetasContext>
    </CategoriasProvider>
  );
}

export default App;
