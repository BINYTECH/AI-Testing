import React from 'react'
import { Component } from 'react';
import {Container , Form, Button, Card} from 'react-bootstrap'
const {Configuration, OpenAIApi} =require("openai");
class Products extends Component {
  constructor(){
      super()
      this.state = {
          heading: 'The Response from the AI will be shown here',
          response:'....await the response'
      }
  }

   onFormSubmit= e =>{
      e.preventDefault();

      const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
      console.log(formDataObj.productName)
      ///RUN OPENAPI
      const configuration = new Configuration({
          apiKey:'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',
      });
      const openai= new OpenAIApi(configuration);

       openai.createCompletion("text-davinci-002", {
        prompt: `Write a detailed , smart, informative and professional product description for ${formDataObj.productName}`,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) =>{
        this.setState({
            heading:`AI Product Description: ${formDataObj.productName}`,
            response:`${response.data.choices[0].text}`
        })
      });

    //   this.setState({
    //     heading:`AI Product Description: ${formDataObj.productName}`,
    //     response:`The Response from openAI API will be shown here`
    // })
    
  }
 render(){
    return (
        <div>
          <Container>
              <h1>Generate Product description</h1>
              <br />
              <p>Generate products descripton for any types of products</p>
              <br />
    
              <Form onSubmit={this.onFormSubmit}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>What Product would you like to get a description for ?</Form.Label>
                 <Form.Control type="text"
                   name="productName"
                  placeholder="Enter product name" />
                 <Form.Text className="text-muted">
                 Enter as much info as possible for more accurate descriptions
                 </Form.Text>
                </Form.Group>
    
               <Button variant="primary" size="lg" type="submit">Get AI Suggestions</Button>
                </Form>
                <br />
    
                <Card>
                  <Card.Body>
                      <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                      <br />
                      <br />
                      <Card.Text><h4>{this.state.response}</h4></Card.Text>
                  </Card.Body>
                </Card>
          </Container>
        </div>
      )
 }    

}

export default Products



