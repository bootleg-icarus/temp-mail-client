import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import PerfectScrollBar from 'react-perfect-scrollbar';

const Mails = (props) => {
    const [mails, setMails] = useState([]);
    const [currentMail, setCurrentMail] = useState(undefined);
    const [showDetails, setShowDetails] = useState(false);

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
                                    <Time>{moment(mails[currentMail].headerLines[8].line).format('YYYY/MM/DD HH:MM')}</Time>
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

