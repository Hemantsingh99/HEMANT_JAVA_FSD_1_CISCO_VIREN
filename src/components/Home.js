import React, { Component } from 'react';
import { Card,variant,Row,Col,Button } from 'react-bootstrap';
/* import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; */

import {homeimg} from './images/homeimg.jpg';

//import Homestyle from './Homestyle';


export default class Home extends Component {
    render() {
        return (
            <div id="card">
                <h1>Home</h1>
                <p>This is home.</p>
                {
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="homeimg.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </div>
        )
    }
}