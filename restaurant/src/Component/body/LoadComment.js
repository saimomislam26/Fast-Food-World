import React from 'react';
import { CardText } from 'reactstrap';
const LoadComment = props => {

    return (

        <div>
            <card>
                <CardText style={{ color: "black" }}>
                    <h5>{props.author}</h5>
                    <p>{props.comment}</p>
                    <p>Rating:{props.rating}</p>
                    <p>Date:{props.date}</p>
                </CardText>
            </card>
        </div>


    );
}

export default LoadComment;