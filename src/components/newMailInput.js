import React, { useState } from 'react';
import styled from "styled-components";

const NewMailInput = (props) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <StyledInfo>Please enter an username here, the domain will be attached automatically</StyledInfo>
            <Container>

                <StyledInput onChange={(e) => { setInputValue(e.target.value) }} />
                <StyledButton onClick={() => {
                    props.inputHandler(inputValue);
                }}>
                    Start receiving emails

            </StyledButton>
            </Container>
        </>
    )
}

export default NewMailInput

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 2rem;
    @media (max-width: 550px) { 
        flex-direction:column;
    }
`;

const StyledInput = styled.input`
    height: 2rem;
    width: 20rem;
    margin-right: 2rem;
    border: 1px solid var(--blue);
    font-size: 16px;
    padding-left: 5px;
    @media (max-width: 550px) { 
        margin-right: 0;
    }
    @media (max-width: 350px) { 
        width:15rem;
    }
`;

const StyledButton = styled.button`
    height: 2rem;
    width: 12rem;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    background-color: var(--blue);
    color:black;
    :focus {
        outline: none;
    }
    @media (max-width: 550px) { 
        margin-top: 10px;
    }
`;

const StyledInfo = styled.h3`

`;