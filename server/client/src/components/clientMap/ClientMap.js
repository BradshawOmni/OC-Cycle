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
      city: {},
      state: {},
      url: {},
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
    console.log(this.state.selectedPlace);
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
    const mapStyle = require("./mapStyle.json");
    const style = {
      width: '90%',
      height: '100%'
    }
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
      <div id="ui-view">
        <div>
          <div className="animated fadeIn">
            <div className="card">
              <div className="card-header">
                <div className="card-header-actions">
                  <a className="card-header-action" href="https://google-developers.appspot.com/maps/documentation/javascript/reference" target="_blank"><small className="text-muted">docs</small></a>
                </div>
              </div>
              <div className="card-body">
                <div className = "flexMap">
                <Map google={this.props.google} 
                  defaultOptions={{ 
                    style: require('./mapStyle.json'),
                  }}
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
                  cuCity={customer.cuCity}
                  cuState={customer.cuState}
                  name={customer.cuName}
                  onClick = { this.onMarkerClick }
                  name={customer.cuName}
                  position={{lat: customer.cuLat, lng: customer.cuLong}} >
                  </Marker>
                )}
                  <InfoWindow
                    className = {'mapInfoWindow'}
                    marker = { this.state.activeMarker }
                    visible = { this.state.showingInfoWindow }>
                    <div className = "">
                      <h3>{this.state.selectedPlace.title}</h3>
                      <div className = "markerCity">{this.state.selectedPlace.cuCity}, {this.state.selectedPlace.cuState}</div>
                    </div>
                  </InfoWindow>
                </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // Get latidude & longitude from address.
    //Load Map
    
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
