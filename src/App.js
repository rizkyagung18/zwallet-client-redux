import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor } from './redux/store'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import RegisterPin from './pages/RegisterPin';
import RegisterSuccess from './pages/RegisterSuccess';
import Search from './pages/Search'
import Topup from './pages/Topup';
import Profile from './pages/Profile';

const App = (props) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" restricted={false} component={Landing} />
          <PublicRoute path="/login" restricted component={Login} />
          <PublicRoute exact path="/register" restricted component={Register} />
          <PublicRoute exact path="/register/pin" restricted component={RegisterPin} />
          <PublicRoute exact path="/register/success" restricted component={RegisterSuccess} />
          <PrivateRoute path="/dashboard" component={Home} />
          <PrivateRoute exact path="/transfer" component={Search} />
          <PrivateRoute path="/topup" component={Topup} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </PersistGate>
  )
}

export default App;
