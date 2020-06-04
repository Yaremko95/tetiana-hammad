import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import books from "./data/fantasy.json"
import SingleBook from "./SingleBook"

class Booklist extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        booklist: books
    }
    render() {
        
        return (
            <Container className="d-flex justify-content-center">
                <Row>
            {this.state.booklist.map ((book, index)=> {
                return (
                    <Col>
                    <SingleBook key={index} bookObject = {book}/>
                    </Col>
                    
                )

})} 
                </Row>
            
            </Container>
        );
    }
}

export default Booklist;