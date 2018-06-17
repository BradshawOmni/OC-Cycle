// This component handles the app template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Navigation from './common/Navigation';
import Aside from './common/Aside';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    
    return (
      <div>      
          <Header loading={this.props.loading} />
          <div className = "app-body">
            <Navigation loading={this.props.loading} textCollapse={this.props.textCollapse} />
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
  
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
   
  };
}

export default connect(mapStateToProps)(App);
