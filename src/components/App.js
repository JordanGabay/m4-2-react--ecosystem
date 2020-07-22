import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';




const App = (props) => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/homepage'><Home/></Route>
        <Route path='/About'><About/></Route>
      </Switch>
    </Router>
  )
}





export default App;
