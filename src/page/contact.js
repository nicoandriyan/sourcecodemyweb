import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import pic from '../../public/img/pic.jpg';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
  	zoom={props.zoom}
    defaultCenter={{ lat: -7.597298, lng: 110.287459 }}
  >
  	<Marker
  		defaultPosition={{lat: -7.597298, lng: 110.287459}}
  		onClick={props.onMarkerClick}
  	/>
  </GoogleMap>
));

class SimpleMapExample extends Component{
	constructor(props){
		super(props);
		this.state={
			zoom: 10,
		};
	}
	handleMarkerClick() {
	    this.setState({
	      zoom: 15,
	    });
	  }
	render() {
		return (
			<div className="back-container findme" data-bg-text="find me">
				<div className="p_auto">
				<div className="pt120">
					<div className="shadow">
					<div className="row">
						<div className="col-md-6 flex">

									<img className="potrait" src={pic}/>
								
									<p className="address">Perum BPH 13F, <br/>Ngadisalam, Gulon, Salam,<br/>Kab. Magelang
									<br/><br/>Central Java<br/>INDONESIA<br/><br/><span className="bold">
									CONTACT ME DIRECTLY</span>
									<br/><a className="link" href="mailto:nicoandriyan4858@gmail.com">nicoandriyan4858@gmail.com</a>
									<br/><br/><span className="bold">ADD ME ON</span><br/>
									<a className="link" href="https://www.facebook.com/nico4ndriyan">facebook</a></p>
								
						</div>
						<div className="col-md-6">
							<SimpleMapExampleGoogleMap
						        containerElement={
						          <div className="map"  />
						        }
						        mapElement={
						          <div className="map"  />
						        }
						        zoom={this.state.zoom}
						        onMarkerClick={()=>this.handleMarkerClick()}
						    />
						</div>
					</div>
					</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default SimpleMapExample;