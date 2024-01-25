import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Pages/Form/Form';
import Services from './components/Pages/Services/Services';
import UserLogin from './components/Pages/UserLogin/UserLogin';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Home/>
          <About/>
          <Services/>
          <UserLogin/>
          <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
