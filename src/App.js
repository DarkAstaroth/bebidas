import React from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriasContext'
import RecetasContext from './context/RecetasContext'
import ListaRecetas from './components/ListaRecetas'
import ModalProvider from './context/ModalContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasContext>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasContext>
    </CategoriasProvider>
  );
}

export default App;
