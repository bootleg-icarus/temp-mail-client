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
`;

const StyledInput = styled.input`
    height: 2rem;
    width: 20rem;
    margin-right: 2rem;
`;

const StyledButton = styled.button`
    height: 2rem;
    width: 12rem;
    border-radius: 0.5rem;
    border: none;

`;

const StyledInfo = styled.h3`

`;