import React,{Component} from 'react';
import {Navbar, NavbarBrand, Media, Container} from 'reactstrap';
import Menu from './MenuComponent';
import SelectedDish from './SelectedDishComponent';
import {DISHES} from '../dishes';
import '../App.css';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    setSelectedDish(dishId) {
        let dish = this.state.dishes.filter(dish => dish.id === dishId)[0];
        this.setState({selectedDish: dish});
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
        return (
    <div className="App">
        <Navbar dark color="primary" expand="md">
        <Container> 
            <NavbarBrand color="light" href="/">Ristorante Con Fusion</NavbarBrand>
        </Container>
        </Navbar>
        
        <Container>
            <Menu dishes={DISHES} onClick={(dishId) => this.setSelectedDish(dishId)} />
            {this.renderSelectedDish(this.state.selectedDish)}
        </Container>
    </div>)
    }
}

export default MainComponent;