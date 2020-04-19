import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewMailInput from '../components/newMailInput';
import Mails from '../components/mails';
import ApiInfo from '../components/APIinfo';

const Home = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [domainList, setDomainList] = useState([]);


    useEffect(() => {
        if (!domainList.length) {
            fetch('http://temp-mail-api.live/api/v1/domainList')
                .then((res) => res.json())
                .then(data => setDomainList(data));
        }
    }, [domainList])

    const emailInputHandler = (newEmail) => {
        //maybe randomise the domain selection later
        setEmailAddress(newEmail + `@${domainList[0]}`);
    }

    return (
        <Container>
            <NewMailInput inputHandler={emailInputHandler} />
            {emailAddress.length ? <Mails emailAddress={emailAddress} /> : null}
            <ApiInfo />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height:80vh;
    width:100%;
`;
