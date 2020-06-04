import React, {Component} from 'react';
import { Row} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";

class FilterBookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                <Row className="w-25 ml-auto my-3">
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => this.props.handleSearch(e.target.value)}/>

                </Row>

        );
    }
}

export default FilterBookList;