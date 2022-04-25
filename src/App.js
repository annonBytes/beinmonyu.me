import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Crawl } from './Crawl';
import {Seamconsult} from './Seamconsult';
import { NavigationBar } from './Components/NavBar';
import {Footer} from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import {TeamEcho} from './TeamEcho';
import {GT} from './gt'
import {Dispago}  from './Dispago'
import {PageTurning}  from './PageTurning'




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
              <Route path="/crawl" component={Crawl} />
              <Route path="/seamconsult" component={Seamconsult} />
              <Route path="/teamecho" component={TeamEcho} />
              <Route path="/gt" component={GT} />
              <Route path="/dispago" component={Dispago} />
              <Route path="/page-turning" component={PageTurning} />
              <Route component={NoMatch} />
            </Switch>
            <Footer/>
        </Router>  
      </React.Fragment>
    );
  }
}

export default App;