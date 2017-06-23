import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Landing from './Landing.jsx';
import Faq from './Faq.jsx';
import Games from './Games.jsx';
import Manage from './Manage.jsx';
import Settings from './Settings.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import axios from 'axios';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateMe: false,
      userid: false
    };

    this.updateHandler = this.updateHandler.bind(this); 
  }

  componentDidMount() {
  let self = this;
   axios.get(`/landing/check`)
    .then(res => {
      self.setState({userid: res.data})
    })
  }

  updateHandler(e) {
    // e.preventDefault()
    console.log('it worked');
    this.setState({updateMe: true})
    // this.forceUpdate();
  }


  render () {
    // console.log('nav render console', this.props.user);
    const routes = [
      { path: '/',
        exact: true,
        sidebar: () => <Landing update={this.updateHandler}/>,
        main: () => <Landing update={i => this.setState({updateMe: i}) }/>
      },
      { path: '/about',
        sidebar: () => <About/>,
        main: () => <About/>
      },
      { path: '/faq',
        sidebar: () => <Faq/>,
        main: () => <Faq/>
      },
      { path: '/signup',
        sidebar: () => <Signup/>,
        main: () => <Signup/>
      },
      { path: '/games',
        sidebar: () => <Games user={this.state.userid}/>,
        main: () => <Games user={this.state.userid}/> 
      },
      { path: '/login',
        sidebar: () => <Login />,
        main: () => <Login />
      },
      {
        path: '/manage',
        sidebar: () => <Manage/>,
        main: () => <Manage/>
      },
      {
        path: '/settings',
        sidebar: () => <Settings/>,
        main: () => <Settings/>
      }
      // {
      //   path: '/team',
      //   sidebar: () => <Teams/>,
      //   main: () => <Teams/>
      // }
    ]

    const styles = {
      ulitem: {
        fontSize: 24,
        listStyleType: 'none', 
        padding: 0, 
        position: 'fixed'
      }, 
      liitem: {
        padding: 7
      }
    };
     let signupLogin = []; 
     if (this.props.user === false) {
      signupLogin = [];
    } else if (this.props.user === 'not logged in') {
      signupLogin = [];
    } else {
      signupLogin.push(<div><h4>Hello</h4><br/><li style={styles.liitem}><Link to="/games">Games</Link></li>
          <li style={styles.liitem}><Link to="/manage">Manage</Link></li></div>)
    } 


    return (
      <Router>
  <div>
  <div style={{ display: 'flex' }}>
    <div style={{
      padding: '10px',
      width: '20%',
      background: '#AAD097',
      height: '100vh'
      }}>
        <ul style={styles.ulitem}>
          <h2 style={{margin:0 }}>Links </h2>
          <li style={styles.liitem}><Link to="/">Home</Link></li>
          <li style={styles.liitem}><Link to="/about">About</Link></li>
          <li style={styles.liitem}><Link to="/faq">FAQ</Link></li>
          <br/>
          {signupLogin}
          <br/>
          <li style={styles.liitem}><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          />
        ))}
    </div>
  </div>
  </div>
</Router>
    )
  }
}



export default Nav;