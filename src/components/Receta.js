import React from 'react'

const Receta = ({receta}) => {
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="img-top"/>

                <div className="card-body">
                    <button 
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        ver Receta
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;