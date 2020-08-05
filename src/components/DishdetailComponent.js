import React, {Component} from 'react';
import {Card, CardImg,  CardTitle, CardBody, CardDeck, Breadcrumb, BreadcrumbItem, 
  Button, ModalHeader, Form, Label, Input,Row,Col,
  Modal,
  ModalBody,
  FormGroup,
  
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
const required=(val)=> val && val.length;
const maxLength=(len)=> (val)=> !(val) || (val.length<=len);
const minLength=(len)=> (val)=> (val) && (val.length >=len);
const isNumber = (val)=>!isNaN(Number(val));
const validEmail=(val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Dishdetail extends Component{
    constructor(props){
        super(props);
        // this.state={
        //   isModalOpen:false
        // };
        // this.toggleModal=this.toggleModal.bind(this);
    }
    render(){
      console.log("Dishdetail Component render invoked");
        if(this.props.dish!=null)
        return (
          <React.Fragment>
            <div class="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3> {this.props.dish.name} </h3>
                </div>
              </div>
                {this.renderDish(this.props.dish)}
                <Card>
                    <CardTitle>Comments</CardTitle>
                    <CardBody>
                        <RenderComments comments={this.props.comments}
                          postComment={this.props.postComment}
                          dishId={this.props.dish.id} />
                        {/* {this.renderComments(this.props.comments, this.props.addComment, this.props.dish.id)} */}
                    </CardBody>
                </Card>
               
            </div>
            </React.Fragment>
        );
        else
        return(<div></div>);
    }
    componentDidMount(){
        console.log("DishDetail component componentDidMount was called");
    }
    // toggleModal() {
    //   this.setState({
    //       isModalOpen: !this.state.isModalOpen
    //   });
    // }
    componentDidUpdate(){
      console.log("Dishdetail Component componentDidUpdate invoked");
    }
    renderDish(dish){
      if(this.props.isLoading){
        return (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        );
      }
      else if (this.props.errMess){
        return (
          <div className="continer">
            <dic className="row">
              <h4>{this.props.errMess}</h4>
            </dic>
          </div>
        );
      }
      else if(dish != null){
          return (
              <CardDeck>
              <Card>
                  <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardBody>{dish.description}</CardBody>
                  </CardBody>
              </Card>
              </CardDeck>
          )
      }
      else{
          return (
              <div></div>
          );
      }
    }
    
    
}
function RenderComments({comments, postComment, dishId}) {
    const commentsDetails=comments.map((comment_obj)=>{
        return(
            <div key={comment_obj.id}>
                <li class="list-group-item">
                    {comment_obj.comment}
                </li>
                <li class='list-group-item blockquote-footer'> 
                    {comment_obj.author}&nbsp;,{comment_obj.date}
                    {/* {new Intl.DateTimeFormat('en-US',
                    {year :'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment_obj.date)))} */}
                </li>
            </div>

        );
    });
    if(comments != null){
        return (<div>
            {commentsDetails}
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>);
    }
    else
        return(<div></div>);
}
class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen:false
    };
    this.toggleModal=this.toggleModal.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values){
    this.toggleModal();
    alert(this.props.dishId+" "+values.stars);
    this.props.postComment(this.props.dishId,values.stars, values.name, values.comment);
  }
  render(){
    return(
      <React.Fragment>
        <Button outline onClick={this.toggleModal} >
          <span className="fa fa-sign-in fa-lg"></span> Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={this.handleSubmit}>
                <Row className="form-group">
                  <Label htmlFor="stars" md={2}>Rating</Label>
                  <Col md={10}>
                    <Control.select model=".stars" name="stars" id="stars"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="name" md={2}>Your Name</Label>
                  <Col md={10}>
                    <Control.text model=".name" id="name" name="name"
                      placeholder="Name"
                      className="form-control"
                      validators={{
                        required, minLength:minLength(3), maxLength:maxLength(15)
                      }}
                    />
                    <Errors 
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required :'Required',
                            minLength:'Must be greater than 3 characters',
                            maxLength:'Must be lest than or equal to 15 chracters'
                        }}
                     />
                   </Col>
                </Row>
                
                <Row className="form-group">
                  <Label htmlFor="comment" md={2}>Comment</Label>
                  <Col md={10}>
                    <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size: 10, offset:2}}>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </Col>
                </Row>
              </LocalForm>
            </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Dishdetail;
/**import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, 
  ListGroupItemText} from 'reactstrap';

  function RenderComments({ comments }) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-10 m-1">
          <h4>Comments</h4>
          <div>
            {comments.map(comment => {
              return (
                <div>
                <div className = "card border-0">
                    <li className = "list-unstyled">
                      <p>{comment.comment} </p>
                      <p>{"-- " + comment.author} -{new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit"}).format(new Date(Date.parse(comment.date)))}
                    </p>
                    </li>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else return <div />;
  }

  const DishDetailComponent = props => {
    return (
      <div className="container">
        <div className="row">
          <div>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderComments comments={props.comment1} />
        </div>
      </div>
    );
  };


export default DishDetailComponent;**/