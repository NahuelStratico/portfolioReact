import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Organisms/Header'


const App = () =>(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Router>
)

export default App;
