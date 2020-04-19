import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import PerfectScrollBar from 'react-perfect-scrollbar';

const socket = io('http://temp-mail-api.live');
socket.on('connect', () => {
    console.log("Connection established");
})

const Mails = (props) => {
    const [mails, setMails] = useState([]);
    const [currentMail, setCurrentMail] = useState(undefined);
    const [showDetails, setShowDetails] = useState(false);
    const [mailEvent, setMailEvent] = useState(undefined);

    useEffect(() => {
        socket.on(props.emailAddress, async (data) => {
            setMailEvent(data);
        })
        if (!isEmpty(mails) && (props.emailAddress !== mails[0].toAddress)) {
            resetState();
        }
    }, [props.emailAddress, mails])

    const resetState = () => {
        setMails([]);
        setShowDetails(false);
        setCurrentMail(undefined);
        setMailEvent(undefined);
    }

    useEffect(() => {
        if (!isEmpty(mailEvent)) {
            if (mails.length === 0) {
                // setMails(prev => (prev.push(mailEvent)));
                let temp = [];
                temp.push(mailEvent);
                setMails(temp);
            } else {
                const found = mails.find(mail => mail.uniqueEmailKey === mailEvent.uniqueEmailKey);
                if (!found) {
                    let temp = cloneDeep(mails);
                    temp.push(mailEvent);
                    setMails(temp);
                }
            }
        }
    }, [mails, mailEvent]);

    const handleMailClick = (index) => {
        setCurrentMail(index);
    }
    const createMarkupBody = () => {
        return { __html: `${mails[currentMail] ? mails[currentMail].html : ''}` }
    }

    return (
        <Container>
            {mails.length ?

                <PerfectScrollBar>
                    <LeftPanel>
                        <TableLabels >
                            <p>Time</p>
                            <p>Sender</p>
                            <p>Subject</p>
                        </TableLabels>
                        {mails.map((mail, index) =>
                            (
                                <Email key={index} onClick={() => handleMailClick(index)}>
                                    <Time>
                                        {moment(mail.headerLines[8].line, "Date: ddd, DD MMM YYYY HH:mm:ss ZZ").format('LT')}
                                    </Time>
                                    <SenderEmail>
                                        {mail.fromAddress}
                                    </SenderEmail>
                                    <Subject>
                                        {mail.subject}
                                    </Subject>
                                </Email>
                            )
                        )}
                    </LeftPanel>
                </PerfectScrollBar>
                : <p>No communication yet</p>}
            <RightPanel>
                {currentMail || currentMail === 0 ?
                    <>
                        <Details onClick={() => { setShowDetails(!showDetails) }}>
                            {showDetails ? null : <p>Details</p>}
                            {showDetails ?
                                <>
                                    <Time>
                                        {moment(mails[currentMail].headerLines[8].line, "Date: ddd, DD MMM YYYY HH:mm:ss ZZ").format('YYYY/MM/DD HH:MM')}
                                    </Time>
                                    <SenderEmail>
                                        {mails[currentMail].fromAddress}
                                    </SenderEmail>
                                    <Subject>
                                        {mails[currentMail].subject}
                                    </Subject>
                                </>
                                : null}
                        </Details>
                        <Body dangerouslySetInnerHTML={createMarkupBody()}>
                        </Body>
                    </>
                    : null}
            </RightPanel>
        </Container>
    )
}

export default Mails

const Container = styled.div`
    padding: 0;    
    height: 80vh;        
    display: grid;
    grid-template-columns: 2fr 3fr;
`;
const LeftPanel = styled.div`            
    overflow-x: hidden;
`;
const TableLabels = styled.div`
    display: flex;    
    padding: 0 10% ;
    p{
        margin-right:30px;
    }    
`;
const RightPanel = styled.div`        
`;

const Email = styled.div`    
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
const Details = styled.div`
    border: 1px solid black;

`;

