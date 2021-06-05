import React from 'react';
import {Container} from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import SelectedDish from './SelectedDishComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import '../App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';

class Main extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };   
    }

    HomePage = () => {
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
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

        <Header />
        <Container>
        <Switch>
              <Route exact path='/home' component={this.HomePage} />

              <Route path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} /> 
              <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} /> 
          </Switch>
        </Container>
        <Footer />
    </div>)
    }  
}

export default Main;