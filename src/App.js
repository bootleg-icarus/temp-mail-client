import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from './components/header';
import Home from './pages/home';

function App() {


  // const fetchFake = () => {
  //   fetch('http://localhost:5000/email')
  //     .then(data => data.json())
  //     .then(res => setMailEvent(res));
  // }

  return (
    <div className="App">
      <Header />
      {/* 
      <button onClick={() => fetchFake()}>Click me for more emails</button> */}
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
          {/* <Route to='/mailer' component={Home}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;