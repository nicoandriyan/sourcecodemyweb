import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Header from './page/header';
import Intro from './page/intro';
import About from './page/about';
import Work from './page/work';
import Contact from './page/contact';
import Blog from './page/blog';
import NotFound from './page/notfound';
import './css/main.css';
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var scroll = Scroll.animateScroll;

class Main extends Component{
  handleToTop(){
    scroll.scrollToTop();
  }
  render() {
    return (
      <div className="app-container">
        <Header />
        <section className="content">
          <Element name="intro">
            <Intro />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="work">
            <Work />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Footer click={()=>this.handleToTop()}/>
        </section>
      </div>
    );
  }
}

class Footer extends Component{
  render() {
    return (
      <div className="footer">
        <p>&copy; 2017<br/>Built with <span className="gold">React</span>
        <br/>Made by <span className="gold">Nico Andriyan</span></p>
        <span className="topbtn" onClick={this.props.click}>&larr; TOP</span>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;