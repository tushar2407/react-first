import React, { Component } from 'react';
// import logo from './logo.svg';
// adding Navbar
// import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu
import Menu from './MenuComponent';
// importing the data from js file
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
// importing header
import Header from './HeaderComponent';
import Footer from './FooterComponent';

// routing
import Home from './HomeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component {
  // subsequently specifying state of the imported dishes
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      // selectedDish:null
    };
  }
  // onDishSelect(dishId){
  //       if(this.state.selectedDish===dishId){
  //           this.setState({
  //               selectedDish:null
  //           });
  //       }
  //       else{
  //           this.setState({
  //               selectedDish:dishId
  //           });
  //       }
  //   }
  // state defined above
  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div >
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home"/>
        </Switch>
       {/* <Navbar dark color="primary">
         <div className="conatainer">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar> */}
       {/* <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onDishSelect(dishId)} />
       <Dishdetail 
            dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
       <Footer />
      </div>
    );
  }
}
// <Menu dishes={this.state.dishes} />
// this is how the dishes is made available to the Menu component as "props"
export default Main;