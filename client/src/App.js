import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Form from './components/Pages/Form/Form'
import Home from './components/Pages/Home/Home.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
