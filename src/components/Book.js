import React from 'react'
import "./Book.css";
import { Container, Row, Col } from 'reactstrap';
const Book = ({image, author, title}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="app">
                        <h1 className="heading">{title}</h1><br/>
                        <img src={image} className="img"/>
                        <h3 className="author">{author}</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book
