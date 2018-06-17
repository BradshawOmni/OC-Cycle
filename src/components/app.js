// This component handles the app template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Navigation from './common/Navigation';
import Aside from './common/Aside';
import { connect } from 'react-redux';


class App extends React.Component {

  onInputChange() {
    console.log('!-----------');
    // this.setState({isActive: !this.state.isActive})
    //this.setState({});

   }
   
  render() {
    return (
      <div>
        <div className="row mb-1">
          <Header loading={this.props.loading} myFunc={this.onInputChange} />
        </div>
        <div className="row mt-5">
          <Navigation loading={this.props.loading} active={this.props.isActive} />
          <main className="main">
            {this.props.children}
          </main>
          <Aside loading={this.props.loading} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    isActive: true
  };
}

export default connect(mapStateToProps)(App);
