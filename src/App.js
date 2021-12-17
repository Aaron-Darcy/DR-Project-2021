import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateWaiting from './components/create-waiting'
import EditWaiting from './components/edit-waiting'
import WaitingList from './components/waiting-list'

function App() {
  return (
    <div className="App">
      {/* client routing */}
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-waiting'} className="nav-link">
                  Vaccine Waiting List
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-waiting'} className="nav-link">
                  Apply
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/waiting-list'} className="nav-link">
                    waiting
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateWaiting {...props} />}
                  />
                  <Route
                    exact
                    path="/create-waiting"
                    component={(props) => <CreateWaiting {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-waiting/:id"
                    component={(props) => <EditWaiting {...props} />}
                  />
                  <Route
                    exact
                    path="/waiting-list"
                    component={(props) => <WaitingList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
