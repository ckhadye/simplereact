import {Row, Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import SelectedDish from './SelectedDishComponent';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

// import {useParams} from 'react';
function RenderMenuItem ({dish, onClick}) {
    return (
        <div className="col-sm-12 col-md-6 mt-5">
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>     
        </Card>
        </div>
    );
}

function RenderSelectedDish(props) {

    let dishes = props.dishes;
    let  { id }  = useParams();

    let dish = getSelectedDish(dishes, id);
    console.log(dish);

    return (
        <SelectedDish dish={dish} />
    );
}

function getSelectedDish(dishes, id) {

    console.log('inside getSelected dish', id);
    console.log('dishes', dishes);

    let dish = dishes.filter(dish => {console.log(dish); if(dish.id == id) return dish;})[0];

    return dish;
}

function Menu(props) {
        let match = useRouteMatch();
        // let dishId = match.params.id;
        const menu = props.dishes.map(dish => {
            return (
                <RenderMenuItem dish={dish} onClick={() => props.onClick} />
        )});

        return (
            <div>
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className="row">
                    {menu}
                </div>
                <Switch>
                    <Route path={`${match.path}/:id`} component={() => 
                        {
                            return (<RenderSelectedDish dishes={props.dishes}></RenderSelectedDish>);
                        }
                        } />
                </Switch>
            </div>
        );
    }

export default Menu;