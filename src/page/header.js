import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../public/img/logo.png';
import Scroll from 'react-scroll';

var Href       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Header extends Component {
	componentDidMount(){
		Events.scrollEvent.register('begin', function() {
	      console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function() {
	      console.log("end", arguments);
	    });

	    scrollSpy.update();
	}
	componentWillUnmount(){
		Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
	}
	render() {
		return (
			<div className="header-container">
				<ul>
					<li><Href activeClass="active" to="about" offset={-120} spy={true} smooth={true} duration={500}>About</Href></li>
					<li><Href activeClass="active" to="work" offset={-120} spy={true} smooth={true} duration={500}>Work</Href></li>
					<li className="hidden-xs"><Href activeClass="active" to="intro" offset={-120} spy={true} smooth={true} duration={500}><img src={logo} alt=""/></Href></li>
					<li><Href activeClass="active" to="contact" offset={-120} spy={true} smooth={true} duration={500}>Contact</Href></li>
					<li>
						<NavLink to="/blog">
						Blog
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;