import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
/*// import Menu
import Menu from './components/MenuComponent';
// importing the data from js file
import {DISHES} from './shared/dishes';*/
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div >
          {/* <Menu dishes={this.state.dishes} />  */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
// <Menu dishes={this.state.dishes} />
// this is how the dishes is made available to the Menu component as "props"
export default App;
