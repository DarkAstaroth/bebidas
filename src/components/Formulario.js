import React,{ useContext } from 'react';
import {CategoriasContext} from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias }=useContext(CategoriasContext);
    
    return ( 
       <form 
            className="col-12"
        >
           <fieldset className="text-center">
               <legend>Bebidas por categoria o ingrediente</legend>
           </fieldset>

           <div className="row mt-4">
               <div className="col-md-4">
                   <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingredientes"
                    />
               </div>

               <div className="col-md-4">
                   <select 
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Selecciones Categoria--</option>
                   </select>
               </div>

               <div className="col-md-4">
                   <input 
                        type="submit" 
                        value="Buscar bebidas" 
                        className="btn btn-primary btn-block"/>
               </div>
           </div>
       </form>
     );
}
 
export default Formulario;