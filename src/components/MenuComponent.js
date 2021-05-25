import React, {Component} from 'react';
import {Media, Row, Col, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import SelectedDish from './SelectedDishComponent';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: props.dishes
        }
    }

    render() {

        const menu = this.state.dishes.map(dish => {
            return (
            
            <div className="col-sm-12 col-md-6 mt-5" key={dish.id}  onClick={() => this.props.onClick(dish.id)}>

            <Card>
            <CardImg src={dish.image} alt={dish.description} />
            <CardImgOverlay>
                <CardTitle tag="h5">
                    {dish.name}
                </CardTitle>
            </CardImgOverlay>
            </Card>


            </div>
        )});

        return (
            <Row className="mt-5">
                {menu}
            </Row>
        );
    }
}

export default Menu;