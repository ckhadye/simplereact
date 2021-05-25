import React,{Component} from 'react';
import {Media,Row, Col, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class SelectedDish extends React.Component {

constructor(props) {
    console.log('Inside constructor of SelectedDish');
    super(props);
}

renderComments() {
    if(this.props.dish.comments != null) {
        const comments = this.props.dish.comments.map(comment => {
            let commentDate = new Date(comment.date);
            let formattedDate = commentDate.toLocaleString('en-US', {month:'short', day: 'numeric', year: 'numeric'})
        return (
        <div className="container">
          <div className="row">
              {comment.comment}
          </div>
          <div className="row">
              -- {comment.author}, {formattedDate}
          </div>
        </div>
          )
        });

        return <div>{comments}</div>
    }
}

render() {
    if(this.props.dish != null) {
        console.log('Inside render method of Selected Dish',this.props.dish);
    return (
    <Row className="mt-5">
        <div className="col-sm-12 col-md-6">
            <Card>
                <CardImg src={this.props.dish.image}  alt={this.props.dish.description} />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        {this.props.dish.name}
                    </CardTitle>
                </CardImgOverlay>
                {/* <Media width="100%" object src={this.props.dish.image} alt={this.props.dish.description}></Media> */}
            </Card>
        </div>
        <div className="col-sm-12 col-md-6">
               {this.renderComments()}
        </div>
    </Row>
    );
    }
    return (<div></div>);
}
}
export default SelectedDish;