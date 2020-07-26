import React, {Component} from 'react';
import {Card, CardImg,  CardTitle, CardBody, CardDeck, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
class Dishdetail extends Component{
    constructor(props){
        super(props);
        console.log("asdas");
    }
    render(){
      console.log("Dishdetail Component render invoked");
        if(this.props.dish!=null)
        return (
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
                        {this.renderComments(this.props.comments)}
                    </CardBody>
                </Card>
            </div>
        );
        else
        return(<div></div>);
    }
    componentDidMount(){
        console.log("DishDetail component componentDidMount was called");
    }

    componentDidUpdate(){
      console.log("Dishdetail Component componentDidUpdate invoked");
    }
    renderDish(dish){
        if(dish != null){
            return (
                <CardDeck>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
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
    renderComments(comments) {
        console.log(comments);
        const commentsDetails=comments.map((comment_obj)=>{
            return(
                <div key={comment_obj.id}>
                    <li class="list-group-item">
                        {comment_obj.comment}
                    </li>
                    <li class='list-group-item blockquote-footer'> 
                        {comment_obj.author}&nbsp;,
                        {new Intl.DateTimeFormat('en-US',
                        {year :'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment_obj.date)))}
                    </li>
                </div>
                
            );
        });
        if(comments != null){
            return (<div>
                {commentsDetails}
            </div>);
        }
        else
            return(<div></div>);
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