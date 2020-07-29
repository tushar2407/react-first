import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
/*// import Menu
import Menu from './components/MenuComponent';
// importing the data from js file
import {DISHES} from './shared/dishes';*/
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
// redux 
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store= ConfigureStore();
// now surreound your react application with provider
// then make use of connect() to connect react app to redux store
// go to the main component
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
      <Provider store={store}>
        <BrowserRouter>
          <div >
            {/* <Menu dishes={this.state.dishes} />  */}
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
// <Menu dishes={this.state.dishes} />
// this is how the dishes is made available to the Menu component as "props"
export default App;
