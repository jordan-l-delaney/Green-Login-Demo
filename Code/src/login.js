import React from 'react';
import Logo from './Media/green-logo.svg'; // Import logo 
import Form from './Form.js'; // Import Created Form section

// Function to create fill login menu
function Login() {
      // Contians logo & heading, calls form underneath
     return(
      <div className="login-holder">
        <img src={Logo} className="green-logo" alt="logo" />
        <h1 className="login-header">Example login screen</h1>
        <p className="login-text">Getting Started with Green.</p>
        <br />

        <Form />

      </div>
     );
  }
  
  export default Login;