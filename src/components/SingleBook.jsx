import React, {Component} from 'react';
import {Container, Card} from "react-bootstrap";

class SingleBook extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="d-flex justify-content-center">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={this.props.bookObject.img} />
                <Card.Body>
                    
                    <Card.Text className="text-center">
                    {this.props.bookObject.title}
                    </Card.Text>
                
                </Card.Body>
            </Card>
            </Container>
        );
    }
}

export default SingleBook;