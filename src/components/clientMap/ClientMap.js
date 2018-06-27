import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

 
export class ClientMap extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { customers } = this.props;
    return (
    <Map google={this.props.google} 
      zoom={5}
      
      mapTypeId='roadmap'
      initialCenter={{lat:41.850033,lng: -87.6500523}}>
      {customers.map(customer =>
      <Marker
          icon={{
            url: 'https://www.omnicommander.com/assets/omniStar.svg',
            scale: '20'
          }}
          key = {customer.customerId}
          title={customer.cuName}
          name={customer.cuName}
          position={{lat: customer.cuLat, lng: customer.cuLong}} 
      />
     )}
    <InfoWindow onClose={this.onInfoWindowClose}>
    </InfoWindow>
    </Map>
    );
  }
}
ClientMap.propTypes = {
  customers: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
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