import React from 'react';
import './App.css';
import CopyrightSharpIcon from '@material-ui/icons/CopyrightSharp';
import Signin from './Signin'
import Signup from './Signup'

function App() {
  return (
    <div className="app">

      <header className="app-header">
        <h1>User Login Form Widget</h1>
      </header>
      
      <div className = "app-component">
        <Signin className="app-signin"></Signin>
        <Signup className="app-signup"></Signup>
      </div>
    
      <footer className="app-footer">
         <p>
           <span>
              <CopyrightSharpIcon id="footer-copyright"></CopyrightSharpIcon>
           </span>
           Login Form Widget All Rights Reserved | Designed by <a href="#" style={{color: "rgb(212, 59, 92)"}}>Gurutu</a>
          </p>
      </footer>
    
    </div>
  );
}

export default App;
