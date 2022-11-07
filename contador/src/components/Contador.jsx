import React, {useState} from 'react'
import Button from './Button'

const Contador = () => {

    const [numero, setNumero] = useState(0)

    const suma = () => {
        if(numero + 1 <= 50){
            setNumero (numero +1);
        }
      
    }

    const resta = () => {
        if(numero - 1 >= 0 && numero <= 50){
            setNumero(numero -1);
        } 
    }

    const multiplicacion = () => {
        if(numero >= 0 && numero * 2 <= 50){
            setNumero (Math.trunc(numero * 2)) ;
        }
        
    }

    const division = () => {
        if(numero / 2 >= 0 && numero <= 50){
            setNumero(Math.trunc(numero / 2));
        }
        
    }


  return (

    <div>
        <p>{numero}</p>
        <Button evento={suma} texto="Suma"/>
        <Button evento={resta} texto="Resta"/>
        <Button evento={multiplicacion} texto="Multiplicar"/>
        <Button evento={division} texto="Dividir"/>
    </div>
  )
}

export default Contador