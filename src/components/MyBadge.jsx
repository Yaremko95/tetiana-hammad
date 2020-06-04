import React, {Component} from 'react';
import Badge from "react-bootstrap/Badge";
import {Container} from "react-bootstrap";

class MyBadge extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Badge variant={this.props.variant}>{this.props.text}</Badge>
            </Container>

        );
    }
}

export default MyBadge;