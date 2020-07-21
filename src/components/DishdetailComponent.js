import React, {Component} from 'react';
import {Card, CardImg,  CardTitle, CardBody, CardDeck} from 'reactstrap';
class Dishdetail extends Component{
    constructor(props){
        super(props);
        console.log("asdas");
    }
    render(){
        if(this.props.dish!=null)
        return (
            <div class="container">
                {this.renderDish(this.props.dish)}
                <Card>
                    <CardTitle>Comments</CardTitle>
                    <CardBody>
                        {this.renderComments(this.props.dish.comments)}
                    </CardBody>
                </Card>
            </div>
        );
        else
        return(<div></div>);
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