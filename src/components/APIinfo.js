import React from 'react';
import styled from "styled-components";
import APILIST from './APILIST';

const renderAPIDocs = (list) => {
    let temp = [];
    list.map((item, index) => {
        temp.push(
            <Container key={index}>
                <Title>
                    <span>{item.type}</span>
                    &nbsp;&nbsp;{item.name}
                </Title>
                <Link>
                    {item.link}
                </Link>
                {item.description} <br /><br />
                <Description>

                    {item.parameters ?
                        <>
                            {item.parameters.map((parameter, index) => {
                                return (
                                    <div key={index}>
                                        <span>{parameter.name}</span> - <b>{parameter.required ? "required" : "optional"}</b> {parameter.description}<br />
                                    </div>
                                )
                            })}
                        </>
                        : null}
                </Description>
                {item.parameters ?
                    <>
                        <SectionHeading>Body</SectionHeading>
                        <RequestBody>
                            <p> &#123;  <br /></p>
                            {item.parameters.map((parameter, index) => {
                                return (
                                    <p key={index}>&nbsp;&nbsp; "{parameter.name}": {parameter.example}, <br /></p>
                                )
                            })}
                            &#125;
            </RequestBody> </> : null}
                <SectionHeading>Example Request</SectionHeading>
                <ExampleRequest>
                    <p> curl --location --request POST '{item.link}' <br /> </p>
                    <p>  --header 'Content-Type: application/json' <br /> </p>
                    {item.parameters ?
                        <>
                            <p>  --data-raw '&#123; <br /> </p>
                            {item.parameters.map((parameter, index) => {
                                return (
                                    <p key={index}> &nbsp;&nbsp;&nbsp;&nbsp; "{parameter.name}": {parameter.example}, <br /> </p>
                                )
                            })}
                            &#125;
                    </>
                        : null}
                </ExampleRequest>
            </Container>
        )
        return null;
    });
    return temp;
}

const ApiInfo = () => {
    return (
        <Wrapper>
            <Header>temp-mail-api</Header>
            <SectionHeading>Integrate the API into your own application</SectionHeading>
            {renderAPIDocs(APILIST)}
        </Wrapper>
    )
}

export default ApiInfo;

const Wrapper = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Container = styled.div`
    display:flex;
    flex-direction: column;    
    align-items:center;
`;

const Header = styled.h1`
    margin-top: 3rem;
    background-color: var(--yellow);
    color: black;
    padding: 5px;
    font-size: 28px;
    border-radius: 3px;
`;
const SectionHeading = styled.h5`
    background-color: var(--green);
    color:black;    
    padding: 5px;
    border-radius: 3px;
    font-size: 20px;
`;

const Title = styled.h3`
    margin-top: 3rem;
    span{
        color: var(--orange);        
    }
`;

const Link = styled.p`
    width:fit-content;
    margin-bottom: 15px;
    word-break: break-all;    
    padding: 6px 10px;
    border-radius: 3px;
    font-size: 18px;
    color: #282828;
    background-color: var(--blue);
`;

const Description = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width: 30rem;
    span{
        font-size: 20px;
        margin: 5px;        
    }
`;

const RequestBody = styled.div`
    padding: 5px 10px;
    border-radius: 3px;
    background: #fafafa;    
    background-color: rgba(51, 51, 51, 0.05);
    color: #d9d9d9;
    display: flex;
    flex-direction:column;
    align-items: start;
    p{
        margin:0;
    }
`;

const ExampleRequest = styled.div`
    max-width: 60rem;
    display: flex;
    flex-direction:column;
    align-items: start;
    p{
        margin:0;
    }    
`;