import React, { useState } from 'react'
import Button from './Button'


const ListaProductos = () => {

    const productos = ["Cereales", "Azucar", "Jugo", "Leche", "Sal"];
    const [listaProductos, setListaProductos] = useState(productos)

    const eliminar = (prod) => {
        setListaProductos(listaProductos.filter((item) => item != prod))
    }


    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {
                    listaProductos.map((prod, index) => (
                        <div>
                            <li key={index}>{prod}</li>
                            <Button evento={() => eliminar(prod)} texto="Borrar item" />
                        </div>
                    ))
                }

            </ul>
        </div>
    )
}

export default ListaProductos