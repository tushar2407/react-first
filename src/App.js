import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// adding Navbar
// import {Navbar, Nav, NavbarBrand} from 'reactstrap';
/*// import Menu
import Menu from './components/MenuComponent';
// importing the data from js file
import {DISHES} from './shared/dishes';*/
import Main from './components/MainComponent';
class App extends Component {
  // subsequently specifying state of the imported dishes
  /*constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }*/
  // state defined above
  render() {
    return (
      <div >
       {/* <Navbar dark color="primary">
         <div className="conatainer">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes={this.state.dishes} /> */}
       <Main />
      </div>
    );
  }
}
// <Menu dishes={this.state.dishes} />
// this is how the dishes is made available to the Menu component as "props"
export default App;
