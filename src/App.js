import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
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

  const fetchFake = () => {
    fetch('http://localhost:5000/email')
      .then(data => data.json())
      .then(res => setMailEvent(res));
  }

  return (
    <div className="App">
      <Header />
      <Mails {...mailEvent} />
      <button onClick={() => fetchFake()}>Click me for more emails</button>
    </div>
  );
}
export default App;