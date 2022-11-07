import React from 'react'


const Button = (props) => {

  return (
    <button className='btn' onClick={props.evento}>{props.texto}</button> 
  )
}

export default Button