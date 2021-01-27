import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './home';
import About from './About';
import Contact from './Contact';
// import Login from './Login';
import Login from './Login';
import Protected from './Protected';
import Signin from './Signin';


function App() {
  return (
    <BrowserRouter>
      

      <Switch>
        <Route exact path="/">
          <Protected Cmp={home} />
        </Route>

        <Route exact path="/About">
          <Protected Cmp={About} />
        </Route>

        <Route exact path="/Contact">
          <Protected Cmp={Contact} />
        </Route>

        <Route exact path="/home">
          <Protected Cmp={home} />
        </Route>

        {/* <Route exact path="/home" component={home}></Route>
        <Route exact path="/about" component={About}></Route> */}
        {/* <Route exact path="/service/:id" render={props => (
          <Service {...props} />)}>
        </Route> */}
        {/* <Route exact path="/contact" component={Contact}></Route> */}
        {/* <Route exact path="/login" component={Login}></Route> */}
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signin" component={Signin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
