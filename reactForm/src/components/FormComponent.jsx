import React from 'react'
import { ParentComponent, Form, Input, ButtonContainer, Button } from "./style.js";


const FormComponent = ({ inputValues, setInputValues, handleSubmit, handleCleanUp, validation }) => {

  return (
    <ParentComponent>
    <Form id="form" onSubmit={handleSubmit}>
    <Input
        value={inputValues.name}
        onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
        placeholder="Name" />
    <Input
        value={inputValues.lastname}
        onChange={(e) => setInputValues({ ...inputValues, lastname: e.target.value })}
        placeholder="Last name" />
    <Input
        value={inputValues.email}
        onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
        placeholder="Email" />
    <Input
        value={inputValues.password}
        onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
        placeholder="Password" type="password" />
</Form>
<ButtonContainer>
    <Button onClick={handleCleanUp} type="button">Cancel</Button>
    <Button form="form" main={true} disabled={validation} type="submit">Submit</Button>
</ButtonContainer>

</ParentComponent>

)
}

export default FormComponent