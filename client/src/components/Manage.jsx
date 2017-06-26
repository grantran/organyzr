import React, {Component} from 'react';
import { Icon, Label, Menu, Table, Button, Segment, Image, Grid, Form } from 'semantic-ui-react'

import axios from 'axios';
import Calendar from './teams/Calendar.jsx';
import NewTeam from './teams/NewTeam.jsx';
import LinkButton from './LinkButton.jsx';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ManageTeam from './ManageTeam.jsx';

class Manage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      teams: [],
      edit: null
    }
  }


  componentDidMount() {
    let teams;
    var self = this;
    axios.get(`/teams/data`)
    .then(res => {
      self.setState({teams: self.state.teams.concat(res.data)})
    })
  }

  render () {

  const styles = {
      div: {
        paddingLeft: 250, 
        paddingRight: 250
      }
  }

  let self = this
  let teamCards = this.state.teams;
  let htmlTeams = [];

  if (teamCards.length !=  null) {
    for (let i = 0; i < teamCards.length; i++) {
      let teamPath = '/manageteam/' + teamCards[i].uuid;
      htmlTeams.push(
          <Table.Row>
            <Table.Cell>
            <div >{teamCards[i].name}</div>
          </Table.Cell>
            <Table.Cell>
              <Router>
                <div>
              <Button ><Link to={teamPath}>Manage</Link></Button><LinkButton uuid={teamCards[i].uuid}></LinkButton>
              <Route path={teamPath} component={<ManageTeam user={teamCards[i].name} uuid={teamCards[i].uuid}/>} />
                </div>
              </Router>
            </Table.Cell>
            </Table.Row>
        )
      }
    }

    return (
      <div style={styles.div}>
        <h3> Hello Manager. These are the teams you're managing. </h3>
        <Table celled style={{fontSize: '20px'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Team Name</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {htmlTeams}
          </Table.Body>
        </Table>
        <div>
          <NewTeam className='new-team'/>
        </div>
        <div>
          <Calendar className='team-calendar'/>
        </div>
      </div>
    );
  }
}

export default Manage;