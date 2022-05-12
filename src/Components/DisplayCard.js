import React from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
const DisplayCard = ({header, title, text, theLink}) => {
   
  return (
    <div>
    <Card>
    <Card.Header>{header}</Card.Header>
     <Card.Body>
    <Card.Title>{ title }</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Nav.Link href={theLink}>
     <Button variant="primary" size="lg">Get Started</Button>
    </Nav.Link>
     
     </Card.Body>
    </Card>
    
    </div>
  )
}

export default DisplayCard