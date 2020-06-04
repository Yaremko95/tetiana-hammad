import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class WarningSign extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="mt-5">
                <Alert  variant="danger">
                    {this.props.text}
                </Alert>
            </Container>
        );
    }
}

export default WarningSign;