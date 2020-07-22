import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import ItemDetails from './ItemDetails'




const App = (props) => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/homepage'><Home/></Route>
        <Route path='/About'><About/></Route>
        <Route path='/items/:itemId'></Route>
      </Switch>
    </Router>
  )
}





export default App;
