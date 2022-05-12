import React from 'react'
import DisplayCard from './DisplayCard'
import {Container, Row, Col } from 'react-bootstrap'
const Home = () => {
  return (
    <div>
        <Container>
            <h1>OPEN AI API fETCHER</h1>
            <p>Start by picking any of the use cases below to start generating ai content</p>
            <Row>
                <Col>
                    <DisplayCard 
                     header="Products"
                     title="Generate product description"
                     text="Generate product description for any type of products simply enter the name and some specifications"
                     theLink="/products" />
                </Col>
                <Col>
                    <DisplayCard 
                     header="Docs"
                     title="Generate Documents description"
                     text="Generate Docs description for any type of products simply enter the name and some specifications"
                     theLink="/docs" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home