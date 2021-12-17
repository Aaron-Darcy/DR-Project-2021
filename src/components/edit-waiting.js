import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditWaiting extends Component {

  constructor(props) {
    super(props)

    //functions for binding
    this.onChangeWaitingName = this.onChangeWaitingName.bind(this);
    this.onChangeWaitingEmail = this.onChangeWaitingEmail.bind(this);
    this.onChangeWaitingPhoneno = this.onChangeWaitingPhoneno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //State
    this.state = {
      name: '',
      email: '',
      phoneno: ''
    }
  }

  //axios
  componentDidMount() {
    axios.get('http://localhost:4000/waiting/edit-waiting' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phoneno: res.data.phoneno
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    //object
    const waitingObject = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno
    };

    axios.put('http://localhost:4000/waiting/update-waiting/' + this.props.match.params.id, waitingObject)
      .then((res) => {
        console.log(res.data)
        console.log('Applicant successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    //Redirect to Waiting List
    this.props.history.push('/waiting-list')
  }

//form for editing
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Applicant
        </Button>
      </Form>
    </div>);
  }
}