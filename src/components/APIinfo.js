import React from 'react';
import styled from "styled-components";

const ApiInfo = () => {
    return (
        <>
            <Header>temp-mail-api</Header>
            <Container>

                <Title>
                    <span>POST</span>
                    &nbsp;&nbsp;awaitInbox
            </Title>
                <Link>
                    https://temp-mail-api.live/api/v1/awaitInbox
                    </Link>
                <SectionHeading>
                    Short description
            </SectionHeading>
                <Description>
                    API will wait for mail for given inbox. <br />
                    <span>inbox</span> - <b>required</b> <br />
                    <span>subject</span> - <b>optional</b> if specified api will only return mail with exact matching subject text. <br />
                    <span>timeLimit</span> - <b>optional</b> in seconds, if specified api will look into db for old mails from last this many seconds. If there is no matching mail then api will wait for new mail. <br />
                    <span>timeout</span> - <b>optional</b> default-max 60 seconds. Will return blank response after this many seconds if mail will not arrive in this seconds.<br />
                </Description>
                <SectionHeading>Body</SectionHeading>
                <RequestBody>
                    <p> &#123;  <br /></p>
                    <p>&nbsp;&nbsp; "inbox": "darshan@shashin-don.online", <br /></p>
                    <p>&nbsp;&nbsp; "timeLimit": 300, <br /></p>
                    <p>&nbsp;&nbsp; "subject": "ABC", <br /></p>
                    <p>&nbsp;&nbsp;"timeout": 300 <br /></p>
                    &#125;
                </RequestBody>
                <SectionHeading>Example Request</SectionHeading>
                <ExampleRequest>
                    <p> curl --location --request POST 'http://temp-mail-api.live/api/v1/awaitInbox' <br /> </p>
                    <p>  --header 'Content-Type: application/json' <br /> </p>
                    <p>  --data-raw '&#123; <br /> </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp; "timeLimit": 300, <br /> </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp; "subject": "ABC", <br /> </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;"timeout": 300 <br /> </p>
                    &#125;'
                </ExampleRequest>
            </Container>
        </>
    )
}

export default ApiInfo;

const Container = styled.div`
    display:flex;
    flex-direction: column;    
    align-items:center;
`;

const Header = styled.h1`
    margin-top: 3rem;
`;
const SectionHeading = styled.h5`

`;

const Title = styled.h3`
    margin-top: 3rem;
    span{
        color:#f5a623;
    }
`;

const Link = styled.p`
    width:fit-content;
    margin-bottom: 15px;
    word-break: break-all;
    border: 1px solid #e6e6e6;
    padding: 6px 10px;
    border-radius: 3px;
    font-size: 12px;
    color: #282828;
    background-color: #f8f8f8;
`;

const Description = styled.p`
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
    border: solid thin #e6e6e6;
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
    border: 1px solid rgba(217, 217, 217, 0.25);
    background-color: rgba(0, 0, 0, 0.1);
`;