import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Header from './Organisms/Header'


const App = () =>(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/works" exact component={Works} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Router>
)

export default App;
