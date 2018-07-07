import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from 'react-geocode';
import iconMarker from '../../img/omniAnit.svg';



 
export class ClientMap extends React.Component {

  constructor(props, context) {
    super(props, context);
   
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      customers: this.props
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    
  }
  onMarkerClick(props, marker, e){
    
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick(props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


  render() {
    const { customers } = this.props;
    Geocode.fromAddress("Eiffel Tower").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
    return (
    // Get latidude & longitude from address.

    //Load Map
    <Map google={this.props.google} 
      zoom={5}
      onClick={this.onMapClicked}
      mapType='HYBRID'
      initialCenter={{lat:41.850033,lng: -87.6500523}}>  
      {customers.map(customer =>
      <Marker
          icon={iconMarker}
          scale={.5}
          key = {customer._id}
          title={customer.cuName}
          name={customer.cuName}
          onClick = { this.onMarkerClick }
          name={customer.cuName}
          position={{lat: customer.cuLat, lng: customer.cuLong}} >
      </Marker>
     )}
      <InfoWindow
      className = "mapInfoWindow"
      marker = { this.state.activeMarker }
      visible = { this.state.showingInfoWindow }>
      <h3>{this.state.selectedPlace.title}</h3>
      </InfoWindow>
   
    </Map>
    );
  }
}
ClientMap.propTypes = {
  customers: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

const googleMap = GoogleApiWrapper({
  apiKey: ("AIzaSyD2S5_PL_O7-kymzlUoTPAb0fNPy716Jc4")
})(ClientMap)
export default connect(mapStateToProps, mapDispatchToProps)(googleMap);
