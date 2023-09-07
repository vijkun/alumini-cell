import React from 'react'
import NavBar from '../navbar/Navbar'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

export default function userscards({ Name, Adress, phonenumber, State, Course, pincode, Department, country, joiningyear, endingyear, username, user, id }) {
    return (
        <div>

            <Row className="cc">
                <Col sm={5}>
                    <Card.Img variant="top"
                    // src={} 
                    />
                </Col>
                <Col sm={7}>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                        <p>class of {joiningyear} to {endingyear}</p>
                        <p>{Course} in {Department}</p>
                    </Card.Text>

                </Col>
            </Row>

        </div>
    )
}

