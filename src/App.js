import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './Components/NavBar';
import {Footer} from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';






class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          
          <NavigationBar/>
          <ScrollToTop/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;