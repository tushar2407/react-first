import React, { Component } from 'react';
// import logo from './logo.svg';
// adding Navbar
// import {Navbar, NavbarBrand} from 'reactstrap';
// import Menu
import Menu from './MenuComponent';
// importing the data from js file
// import {DISHES} from '../shared/dishes';       /** as adding reducer.js */
// import {COMMENTS} from '../shared/comments';
// import {LEADERS} from '../shared/leaders';
// import {PROMOTIONS} from '../shared/promotions';
import Dishdetail from './DishdetailComponent';
// importing header
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
// routing
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
// redux
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// adding reducers
import {addComment} from '../redux/ActionCreators';
// redux thunk and loggers
import {fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';
// redux forms revisited
import { actions } from 'react-redux-form';
// now add a dispatch to mapDispatchToProps

// impolementing a postcommment
import { postComment, postFeedback } from '../redux/ActionCreators';
// change addComment to postComment below everyhwere

import { TransitionGroup, CSSTransition } from 'react-transition-group';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
    // these are retreived from redux store
    // this is done by surrenounding the export statement around connect
    // now all this is available to Main but as props not as state
  }
}
const mapDispatchToProps = (dispatch) => ({
  //addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  postComment : (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback : (feedback) => dispatch(postFeedback(feedback)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}, // as coreesponding model will be called 'feedback'
  // now an attribute needs to be passed to contactComponent
  fetchLeaders: () => {dispatch(fetchLeaders())}
});
// now this dispatcher need to passed on as a parameter to the connect at the bottom
// so as to use it in the main function below
class Main extends Component {
  // subsequently specifying state of the imported dishes
  constructor(props) {
    super(props);
    // this.state={ /** adding to reducer.js initialState */
    //   dishes:DISHES, 
    //   comments:COMMENTS,
    //   leaders:LEADERS,
    //   promotions: PROMOTIONS
    //   // selectedDish:null
    // };
  }
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
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
        // <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        //     promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        //     leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
        // coz of redux mapStateToProps()
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          
          promosErrMess={this.props.promotions.errMess}
          promosLoading={this.props.promotions.isLoading}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}

          leaderErrMess={this.props.leaders.errMess}
          leaderLoading={this.props.leaders.isLoading}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const DishWithId = ({ match }) => {
      // it gets three params namely match, location and history
      // but we only want match so this is how we extract match 
      return (
        // <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0] } 
        //   comments={this.state.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}
        // />
        <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMEss={this.props.dishes.errMess}
          commentsErrMEss={this.props.comments.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          postComment={this.props.postComment}
        />
      );

    }
    return (
      <div >
        <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              {/* now go to contactComponent */}
              <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Redirect to="/home" />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// as using router so withRouter is necessary while surrounding with connect