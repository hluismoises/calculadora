import React from "react"
import "../hoja-de-estilos/boton.css"

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "="
  }
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      /*Enviamos una funcion anonima al evento on click para que pueda recibir la funcion del props
      De esta forma ejecuta la funcion directamente*/
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton
