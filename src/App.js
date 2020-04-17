import React from 'react';
import io from 'socket.io-client';
import './App.css';
import Header from './components/header';

const socket = io('http://temp-mail-api.live');

socket.on('connect', () => {
  console.log("Connected");
})

function App() {
  return (
    <div className="App">
      <Header />
      Hello, World
    </div>
  );
}

export default App;
