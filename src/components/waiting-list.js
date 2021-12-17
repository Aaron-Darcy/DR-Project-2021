import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import WaitingTableRow from './WaitingTableRow';


export default class WaitingList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      waiting: []
    };
  }
  //axios
  componentDidMount() {
    axios.get('http://localhost:4000/waiting/')
      .then(res => {
        this.setState({
          waiting: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
//returns object from database
  DataTable() {
    return this.state.waiting.map((res, i) => {
      return <WaitingTableRow obj={res} key={i} />;
    });
  }

  //render for table/list
  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}