import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// adding Navbar
import {Navbar, Nav, NavbarBrand} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar dark color="primary">
         <div className="conatainer">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
      </div>
    );
  }
}

export default App;
