import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Segment, Button, Divider, Image } from 'semantic-ui-react'

import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import axios from 'axios';
import { Message, Loader } from 'semantic-ui-react'


class Landing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userid: false,
      update: false
    }
  }

  componentDidMount() {

  }

  render() {

    // if (this.state.userid) {

    let landing = [];
    if (this.props.user === false) {
      landing.push(<Loader active inline='centered' />) 
    } else if (this.props.user === 'not logged in') {
      landing.push(<Router>
        <div>
      <Segment padded size='tiny'>
        <Link to='/login'>
          <Button primary fluid>Login</Button>
        </Link>
        
        <Divider horizontal>Or</Divider>
        
        <Link to='/signup'>
          <Button secondary fluid>Sign Up Now</Button>
        </Link>
      </Segment>
    
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      </div>
       </Router>)
    } else {
      console.log('inside render, logged in', 
      this.props.user);
      landing.push(<Segment>
        <div> Hello  </div>
        </Segment>)
    }
    const styles = {
      div: {
        paddingLeft: 100, 
        paddingRight: 100
      }
    }

    return(
    
    <div>
    <Image src={require('../images/organyzr.png')} size='large' centered/>
        <Message>
          <p>
            Welcome to Organyzr. A manager-based dashboard system to manage sport teams.
          </p>
        </Message>
     {landing}
    </div>

    )}
}


  
export default Landing;