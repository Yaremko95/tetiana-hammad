import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import books from "../data/fantasy.json"
import SingleBook from "./SingleBook"
import FilterBookList from "./FilterBookList";

class Booklist extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        booklist: books,
        filter: null
    }

    handelFilter = value =>{
        this.setState({
            filter: value
        })


    }
    render() {

        return (
            <Container>
                <FilterBookList handleSearch = {this.handelFilter} />
                <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5">
                {  this.state.filter!=null?
                    this.state.booklist.filter(book => book.title.toLowerCase().includes(this.state.filter)).map ((book, index)=> {
                    return (
                        <Col key={index}>
                            <SingleBook  bookObject = {book}/>
                        </Col>
                    )

                }):
                    this.state.booklist.map((book, index)=> {
                        return (
                            <Col key={index}>
                                <SingleBook index ={index} bookObject = {book}/>
                            </Col>
                        )
                    }
                    )
                }

                </Row>
            
            </Container>
        );
    }
}

export default Booklist;