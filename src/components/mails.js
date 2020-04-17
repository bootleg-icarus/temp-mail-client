import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

const Mails = (props) => {
    const [mails, setMails] = useState([]);
    const [currentMail, setCurrentMail] = useState(0);
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

    const handleMailClick = (index) => {
        setCurrentMail(index)
    }
    const createMarkupBody = () => {
        return { __html: `${mails[currentMail] ? mails[currentMail].html : ''}` }
    }

    return (
        <Container>
            <LeftPanel>
                {mails.length ? mails.map((mail, index) =>
                    (
                        <Email key={index} onClick={() => handleMailClick(index)}>
                            <Time>
                                {moment(mail.headerLines[8].line).format('LT')}
                            </Time>
                            <SenderEmail>
                                {mail.fromAddress}
                            </SenderEmail>
                            <Subject>
                                {mail.subject}
                            </Subject>
                        </Email>
                    )
                ) : <p>No communication yet</p>}
            </LeftPanel>
            <RightPanel>
                <Body dangerouslySetInnerHTML={createMarkupBody()}>
                </Body>
            </RightPanel>
        </Container>
    )
}

export default Mails

const Container = styled.div`
    padding: 0;
    border: 1px solid black;
    height: 80vh;        
    display: grid;
    grid-template-columns: 2fr 3fr;
`;
const LeftPanel = styled.div`    
    border: 1px solid black;
    overflow-y: scroll;
    overflow-x: hidden;
`;
const RightPanel = styled.div`    
    border: 1px solid black;
`;

const Email = styled.div`
    border: 1px solid black;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow:hidden;
    cursor:pointer;
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

