import React, {Component} from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

// Components for pages
import Faq from './components/Faq.jsx';
import About from './components/About.jsx';
import Signup from './components/Signup.jsx';
import Nav from './components/Nav.jsx';

// import Teams from './components/teams/Teams.jsx';


import Login from './components/Login.jsx'

import Landing from './components/Landing.jsx';
import Games from './components/Games.jsx';
import Manage from './components/Manage.jsx';
import { Menu, Loader, Segment, Grid } from 'semantic-ui-react'
import Settings from './components/Settings.jsx';




class App extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      userid: false
    }

  }

  componentDidMount() {
    console.log('IN APPJSX component did mount');
    // var self = this;
    // axios.get(`/landing/check`)
    // .then(res => {
    //   self.setState({userid: res.data})
    // })
  }

  render () {
    


  return (
    <div>
      <Nav user={this.state.userid}/>
    </div>
  
    )
  }
}



export default App