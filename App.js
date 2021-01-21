import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import PageHome from './components/PageHome';

function App() {
  return (
     <div>
       <Router>
         <PageHome path="/home"/>
         <PageHome path="/:word"/>
         <PageHome path="/:word/:color/:backgroundColor"/>
       </Router>
     </div>

  );
}

export default App;
