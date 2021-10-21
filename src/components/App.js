import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Project from './Project';
import Services from './Services';
import Skills from './Skills';
function App() {
  return (
    <>
      <div className="vh-100">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/project" component={Project}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>

    </>
  );
}

export default App;
