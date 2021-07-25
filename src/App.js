import React from 'react';
import './App.css';
import Routes from './components/Routes';
import { BrowserRouter  as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
