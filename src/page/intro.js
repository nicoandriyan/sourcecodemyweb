import React, {Component} from 'react';
import Scroll from 'react-scroll';

var scroller = Scroll.scroller;

class Intro extends Component{
	handleMore(){
		scroller.scrollTo('about',{
			duration: 500,
			smooth: true,
		})
	}
	render() {
		return (
			<div className="back-container intro" data-bg-text="who am I">
				<div className="container-fluid">
				<div className="row">
					<div className="col-md-10 col-md-offset-1 pt60">
						<h1 className="title">
							Web Developer, Casual Gamer, Arsenal Supporter, Job Seeker (for now)
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<p className="p_auto">
							Hello, my name is Nico Andriyan. I'am trying to be a profesional front end developer.
							although I have not had much experience with front end developer, but I have the passion to do it
							especially with javascript's framework like React JS.
							I'm looking for an opportunity to work in an IT company and be a professional. <br/>
							Learn more <span onClick={()=>this.handleMore()}>about me ..</span>
						</p>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default Intro;