import React, {Component} from 'react';
import {Container, Card} from "react-bootstrap";

class SingleBook extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Card key={this.props.index} >
                <Card.Img variant="top" src={this.props.bookObject.img}  style={{height:"15rem", objectFit:"cover"}}/>
                <Card.Body>
                    <Card.Text className="text-center">
                    {this.props.bookObject.title}
                    </Card.Text>
                
                </Card.Body>
            </Card>

        );
    }
}

export default SingleBook;