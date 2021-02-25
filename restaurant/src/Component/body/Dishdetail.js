import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import LoadComment from './LoadComment';
import Commentform from './Commentform';

const DishDetail = props => {

    let showcomment = props.comment.map(item => {
        return (
            <LoadComment date={item.date} rating={item.rating} comment={item.comment} author={item.author} />
        );
    }
    )
    return (
        <div>
            <Card inverse style={{ margin: "10px" }}>
                <CardBody style={{ textAlign: "left" }}>
                    <CardImg width="100%" src={props.dish.image} alt="Card image cap" />
                    <CardTitle style={{ color: "black" }}>{props.dish.name}</CardTitle>
                    <CardText style={{ color: "black" }}>{props.dish.description}</CardText>
                    <hr />
                    {showcomment}
                    <hr />
                    <Commentform dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>

            </Card>
        </div>
    )
}

export default DishDetail;