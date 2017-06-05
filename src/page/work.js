import React, {Component} from 'react';
import update from 'immutability-helper';
import gkiTumb from '../../public/img/gki-tumb2.jpg';
import gki from '../../public/img/gki.jpg';
import soon from '../../public/img/soon.jpg';

class Work extends Component{
	constructor(props){
		super(props);
		this.state = {
			worklist: [
				{
					thumbnail: gkiTumb,
					link: gki,
					title: "GKI SW Jateng",
					desc: "/Backend /CakePHP /Team",
					id: 1,
					opacity: {opacity:1}
				},
				{
					thumbnail: soon,
					link: soon,
					title: "Hire Me!",
					desc: "so I can fill this slot..",
					id: 2,
					opacity: {opacity:1}
				},
				{
					thumbnail: soon,
					link: soon,
					title: "Hire Me!",
					desc: "so I can fill this slot..",
					id: 3,
					opacity: {opacity:1}
				}
			]
		}
	}
	mouseEnter(id){
		if(id===1){
			const gg = this.state.worklist;
			const newgg = update(gg, {1:{opacity: {$set: {opacity:0.6}}}, 2:{opacity: {$set: {opacity:0.6}}}});
			this.setState({
				worklist: newgg
			})
		}
		else if(id===2){
			const gg = this.state.worklist;
			const newgg = update(gg, {0:{opacity: {$set: {opacity:0.6}}}, 2:{opacity: {$set: {opacity:0.6}}}});
			this.setState({
				worklist: newgg
			})
		}
		else{
			const gg = this.state.worklist;
			const newgg = update(gg, {0:{opacity: {$set: {opacity:0.6}}}, 1:{opacity: {$set: {opacity:0.6}}}});
			this.setState({
				worklist: newgg
			})
		}
	}
	mouseLeave(){
		const gg = this.state.worklist;
		const newgg = update(gg, {0:{opacity: {$set: {opacity:1}}}, 1:{opacity: {$set: {opacity:1}}}, 2:{opacity: {$set: {opacity:1}}}});
		this.setState({
			worklist: newgg
		})
	}
	render() {
		let _this = this;
		return (
			<div className="back-container intro" data-bg-text="past work">
				<div className="container-fluid">
					<div className="row p_auto mt120">
						{
							this.state.worklist.map((item)=>{
								return (
									<div className="col-md-4">
										<a href={item.link} data-lightbox={item.id}>
										<div className="item" onMouseEnter={()=>_this.mouseEnter(item.id)}
										onMouseLeave={()=>_this.mouseLeave()}
										style={item.opacity}>
											<img src={item.thumbnail} alt=""/>
											<div className="description">
												<p>{item.title}</p>
												<p>{item.desc}</p>
											</div>
										</div>
										</a>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Work;