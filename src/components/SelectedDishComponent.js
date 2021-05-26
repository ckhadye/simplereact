import {Media,Row, Col, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function SelectedDish(props){
    if(props.dish != null) {
    return (
    <Row className="mt-5">
        <div className="col-sm-12 col-md-6">
            <Card>
                <CardImg src={props.dish.image}  alt={props.dish.description} />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        {props.dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
        <div className="col-sm-12 col-md-6">
            <RenderComments dish={props.dish} />
        </div>
    </Row>
    );
    }
    return (<div></div>);
}

function RenderComments(props) {
    if(props.dish.comments != null) {
        const comments = props.dish.comments.map(comment => {
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
export default SelectedDish;