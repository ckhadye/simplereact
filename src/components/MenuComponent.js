import React, {Component} from 'react';
import {Media, Row, Col, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import SelectedDish from './SelectedDishComponent';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: props.dishes,
            selectedDish: props.dishes[0]
        }
        // this.setState({
        //     dishes:this.props.dishes
        // });
    }

    setSelectedDish(dish) {
        console.log('Clicked:',dish.id);
        this.setState({
            selectedDish: dish
        });
    }


    renderSelectedDish(selectedDish){
        
        console.log('Inside renderSelectedDish',selectedDish);
        if(selectedDish != null) {
            console.log('Calling render of SelectedDish');
                    return <SelectedDish dish={selectedDish}></SelectedDish>;
            }
                    return <div></div>;
        }

    render() {

        const menu = this.state.dishes.map(dish => {
            return (
            
            <div className="col-sm-12 col-md-6 mt-5" key={dish.id}  onClick={() => this.setSelectedDish(dish)}>

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
        <div className="container">
                <Row className="mt-5">
                    {menu}
                </Row>

            {this.renderSelectedDish(this.state.selectedDish)}
        </div>
        );
    }
}

export default Menu;