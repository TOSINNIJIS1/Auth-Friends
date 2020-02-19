import React from 'react'
import Form from './form';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
// import Friends from './friends';
import PrivateRoute from './protectedRoute';
import FriendsList from './list';
import NewForm from './newFriends';


function App() {


  return (
    <Router>
      <div className='App'>

        <Link to='/friends'> Friends</Link>

        <Link to='/login'> Login </Link>

        <Link to='/add'> Add </Link>

      </div>


      <Switch>
      <PrivateRoute path="/friends" component={FriendsList} />
      <Route exact path="/login" component={Form} />
      <Route path = '/add' component={NewForm} />
      <Route component={Form} />

    </Switch>

    </Router>

    
  )
} 


export default App