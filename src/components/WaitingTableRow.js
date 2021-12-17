import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class WaitingTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteWaiting = this.deleteWaiting.bind(this)
  }

  //delete function
  deleteWaiting() {
    axios
      .delete(
        'http://localhost:4000/waiting/delete-waiting/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Applicant successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  //render for edit and delete
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.phoneno}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-waiting/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteWaiting} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
