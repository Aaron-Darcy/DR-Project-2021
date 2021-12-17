import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateWaiting extends Component {

  constructor(props) {
    super(props)

    //functions for binding
    this.onChangeWaitingName = this.onChangeWaitingName.bind(this);
    this.onChangeWaitingEmail = this.onChangeWaitingEmail.bind(this);
    this.onChangeWaitingPhoneno = this.onChangeWaitingPhoneno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      phoneno: ''
    }
  }

  onChangeWaitingName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeWaitingEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeWaitingPhoneno(e) {
    this.setState({ phoneno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    const waitingObject = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno
    };
    axios.post('http://localhost:4000/waiting/create-waiting', waitingObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', phoneno: '' })
  }
  
  //form for entering data
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeWaitingName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeWaitingEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={this.state.phoneno} onChange={this.onChangeWaitingPhoneno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </div>);
  }
}