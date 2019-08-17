import React from 'react';
//import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import './App.css'
import Footer from './components/Footer/Footer.js'
import LoginEntry from './components/LoginEntry/LoginEntry.js'

function App() {
  return (    
    <div className='app'>
      <Navbar/>
        <main className='main'>
          <p className='topText'> Sign In </p>
          <p style={{paddingBottom: '10px'}}>
            You must use your Shopify store address 
            <br/>
            to sign in or register for a new account.
          </p>
          <LoginEntry/>
          <p className='suggestionText'>
            Looking for the 
            <br/>
            <span class='suggestionText-link'><a href="/"> Platform Account Login</a></span>?
          </p>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
