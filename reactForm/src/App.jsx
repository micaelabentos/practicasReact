import { useState } from 'react'
import FormComponent from './components/FormComponent'



function App() {

  const [inputValues, setInputValues] = useState({ name: "", lastname: "", email: "", password: "" })
 
  
 const  handleSubmit = (e) => {
    e.preventDefault();
    validation(inputValues);
 }

const handleCleanUp = () => {
    setInputValues({ name: "", lastname: "", email: "", password: "" })
}

const validation = () => {
  if(inputValues.name.length < 0 || inputValues.lastname.length < 0 ){
     console.log("Todos los campos son obligatorios")
  } 
  if(!inputValues.email.includes('@')){
    console.log( "Debe ingresar un email correcto")
  }
  if(inputValues.password.length < 3){
     console.log("La contraseña debe ser de 3 caracteres o más")
  }
}

const childProps = {
  inputValues,
  setInputValues,
  handleSubmit,
  handleCleanUp
} 
  return (
    <div className="App">
      
      <FormComponent  {...childProps}/>

    </div>
  )
}

export default App
