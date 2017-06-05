import React, {Component} from 'react';
import {Table, thead, tr, th, tbody, td} from 'react-bootstrap';
import pic from '../../public/img/me.jpg';

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			content: (
				<div>
					<p className="name">NICO ANDRIYAN</p>
					<Table >
						<tbody>
						  <tr>
						    <td>Nationality</td>
						    <td>INDONESIA</td>
						  </tr>
						  <tr>
						    <td>Team</td>
						    <td>Free Agent</td>
						  </tr>
						  <tr>
						    <td>Age</td>
						    <td>25</td>
						  </tr>
						  <tr>
						    <td>Height (cm)</td>
						    <td>170</td>
						  </tr>
						</tbody>
					</Table>
				</div>
			),
			skills: (
				<div>
					<p className="name">FRONT END BASIC</p>
					<Table id="table">
						<tbody>
						  <tr>
						    <td>HTML</td>
						  	<td><div className="bar"><div className="htmlpoin"></div></div></td>
						  </tr>
						  <tr>
						    <td>CSS</td>
						  	<td><div className="bar"><div className="csspoin"></div></div></td>
						  </tr>
						  <tr>
						    <td>Javascript</td>
						  	<td><div className="bar"><div className="jspoin"></div></div></td>
						  </tr>
						</tbody>
					</Table>
					<p className="name">OTHERS</p>
					<Table>
						<tbody>
						  <tr>
						    <td>JQUERY</td>
						  	<td><div className="bar"><div className="jquerypoin"></div></div></td>
						  </tr>
						  <tr>
						    <td>REACT JS</td>
						  	<td><div className="bar"><div className="reactpoin"></div></div></td>
						  </tr>
						</tbody>
					</Table>
				</div>
			),
			baseinformation:(
				<div>
					<p className="name">NICO ANDRIYAN</p>
					<Table >
						<tbody>
						  <tr>
						    <td>Nationality</td>
						    <td>INDONESIA</td>
						  </tr>
						  <tr>
						    <td>Team</td>
						    <td>Free Agent</td>
						  </tr>
						  <tr>
						    <td>Age</td>
						    <td>25</td>
						  </tr>
						  <tr>
						    <td>Height (cm)</td>
						    <td>170</td>
						  </tr>
						</tbody>
					</Table>
				</div>
			),
			title:"Base Information",
			toggle:1
		}
	}
	handleClick(){
		if(this.state.toggle==1){
			this.setState({
				content:this.state.skills,
				title:"Skills",
				toggle:2
			});
		}
		else{
			this.setState({
				content:this.state.baseinformation,
				title:"Base Informations",
				toggle:1
			});
		}
	}
	render() {
		return (
			<div className="back-container about" data-bg-text="more info">
			<div className="container-fluid">
				<div className="row p_auto mt120 pos_r">
					<div className="left">
						<div className="topleft"></div>
						<img src={pic} alt="" />
						<div className="bottomleft"></div>
					</div>
					<div className="right">
						<ul className="flex space-between">
							<li>{this.state.title}</li>
							<li><button type="button" className="btn btn-primary" onClick={()=>this.handleClick()}>Next</button></li>
						</ul>
						{this.state.content}
					</div><div className="bottomright"></div>
				</div>
			</div>
			</div>
		);
	}
}

export default About;