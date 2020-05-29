import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components'

//All others are presentational component
//here props is replaced by object {dish , onClick}....onClick here is same as props

function RenderMenuItem({ dish, onClick }) {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        {/* This part of accessing data is important */}
                        <Link to={`/menu/${dish._id}`} >
                            <CardImg width="100%" style={{height:'350px'}} src={baseUrl + dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle style={{fontSize:"20px",backgroundColor:'snow',display:'inline-block',padding:'5px',color:'black',borderRadius:'10px'}}>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
            </FadeTransform>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish._id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;