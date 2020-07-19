import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// adding Navbar
import {Navbar, Nav, NavbarBrand} from 'reactstrap';
// import Menu
import Menu from './components/MenuComponent';
class App extends Component {
  render() {
    return (
      <div >
       <Navbar dark color="primary">
         <div className="conatainer">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
       <Menu />
      </div>
    );
  }
}

export default App;
