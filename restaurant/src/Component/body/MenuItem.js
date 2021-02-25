import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';


const MenuItem = (props) => {
    return (
        <div>
            <Card inverse style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" src={props.dish.image} alt="Card image cap" style={{ opacity: ".5" }} />
                    <CardImgOverlay>
                        <CardTitle tag="h5" style={{ color: "black", cursor: "pointer" }} onClick={props.SelectedDish}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>

            </Card>
        </div>
    )
}

export default MenuItem;