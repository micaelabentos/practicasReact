import styled, { css } from "styled-components";

export const ParentComponent = styled.div`
    width: 350px;
    height: auto;
    margin: 100px auto;
    box-shadow: 1px 1px 6px 1px rgb(115 103 240 / 40%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`

export const Form = styled.form`
    width: 100%;
    height: auto;
`

export const Input = styled.input`
    padding: 10px;
    width: 94%;
    background-color: #EEEDED;
    font-family: 'Verdana', sans-serif;
    margin-top: 10px;
    border-radius: 5px;
    border:none;    
    &:focus{
        outline: none;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
`

export const Button = styled.button`
    width: 45%;
    font-family: 'Verdana', sans-serif;
    background-color: ${({ main }) => main ? "#5D9CEC" : "#AAB2BD"};
    box-shadow: ${({ main }) => main && "0 3px 6px 0 rgb(115 103 240 / 40%)" };
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: .9em;
    letter-spacing: 1px;
    padding: 10px;
    cursor: pointer;
    ${({ main }) => main && css`
        &:hover{
            transform: scale(1.02);
        };
    `};
`