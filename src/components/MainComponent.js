import React, { Component } from 'react';
// import logo from './logo.svg';
// adding Navbar
// import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu
import Menu from './MenuComponent';
// importing the data from js file
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Dishdetail from './DishdetailComponent';
// importing header
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
// routing
import Home from './HomeComponent';
import About from './AboutComponent'; 
import { Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component {
  // subsequently specifying state of the imported dishes
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions: PROMOTIONS
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
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
      );
    }

    const DishWithId=({match})=>{ 
      // it gets three params namely match, location and history
      // but we only want match so this is how we extract match 
      return(
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
          comments={this.state.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}
        />
      );

    }


    return (
      <div >
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
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