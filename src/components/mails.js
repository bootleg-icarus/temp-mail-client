import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';

const Mails = (props) => {
    const [mails, setMails] = useState([]);
    useEffect(() => {
        if (!isEmpty(props)) {
            if (mails.length === 0) {
                let temp = [];
                temp.push(props);
                setMails(temp);
            } else {
                const found = mails.find(mail => mail.uniqueEmailKey === props.uniqueEmailKey);
                if (!found) {
                    let temp = cloneDeep(mails);
                    temp.push(props);
                    setMails(temp);
                }
            }
        }
    }, [props, mails]);

    return (
        <Container>
            {mails.length ? mails.map((mail, index) =>
                (
                    <Email key={index}>
                        <Time>
                            {mail.headerLines[8].line}
                        </Time>
                        <SenderEmail>
                            {mail.fromAddress}
                        </SenderEmail>
                        <Subject>
                            {mail.subject}
                        </Subject>
                        <Body>
                            {mail.text}
                        </Body>
                    </Email>
                )
            ) : <p>No communication yet</p>}
        </Container>
    )
}

export default Mails

const Container = styled.div`
    padding: 10%;
    border: 1px solid black;
    min-height: 50vh;
`;

const Email = styled.div`
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const SenderEmail = styled.div`
    margin: 5px;
`;

const Time = styled.div`
    margin: 5px;
`;

const Subject = styled.div`
    margin: 5px;
`;

const Body = styled.div`
    margin: 5px;
`;

