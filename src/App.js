import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Header from './components/header';
import Mails from './components/mails';

const socket = io('http://temp-mail-api.live');

socket.on('connect', () => {
  console.log("Connected");
})
function App() {
  const [emailAddress, setEmailAddress] = useState('bongachica@shashin-don.online');
  const [mailEvent, setMailEvent] = useState(undefined);

  useEffect(() => {
    socket.on(emailAddress, (data) => {
      setMailEvent(data);
    })
    console.log("mailEvent", mailEvent);
  }, [emailAddress, mailEvent])

  return (
    <div className="App">
      <Header />
      <Mails {...mailEvent} />
    </div>
  );
}
export default App;