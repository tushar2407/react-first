import React, { Component } from 'react';
// import logo from './logo.svg';
// adding Navbar
import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu
import Menu from './MenuComponent';
// importing the data from js file
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
  // subsequently specifying state of the imported dishes
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
        if(this.state.selectedDish===dishId){
            this.setState({
                selectedDish:null
            });
        }
        else{
            this.setState({
                selectedDish:dishId
            });
        }
    }
  // state defined above
  render() {
    return (
      <div >
       <Navbar dark color="primary">
         <div className="conatainer">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onDishSelect(dishId)} />
       <Dishdetail 
            dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}
// <Menu dishes={this.state.dishes} />
// this is how the dishes is made available to the Menu component as "props"
export default Main;