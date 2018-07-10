import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { browserHistory } from 'react-router';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        errors: ""
    }
    this.login = this.login.bind(this);
  }
  login() {
    this.setState({
      errors: ""
    });
      axios.get('/auth/google', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Methods' : '*'
                },
                mode: 'cors'
                })
                .then(res =>{
                  if(res.success) {
                    this.redirect('/customers');
                  } else {
                    this.setState({
                      errors: "Login failed"
                    });
                  }
                });
  }
  render() {
    return (
      <div className="container loginPage">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body text-center">
                  <div>
                   <img className = "responsive-img" src = "https://www.omnicommander.com/assets/omniStar.svg" width = "100"/>
                  </div>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="row text-center">
                    <div className="col-12 text-center">
                    <a href="/auth/google" ><button type="button" className="btn px-4 OmniCommanderBtn" onClick={ this.login }><i className="fab fa-google"></i> Login</button></a>
                    </div>
                    <div className="col-12 text-center">
                      <button type="button" className="btn btn-link px-0">Need Help Logging In?</button>
                    </div>
                    {
                      this.state.errors === "" ? null : `<div> ${this.state.errors}</div>`
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

    );
    
  }
}
LoginPage.propTypes = {
 
};


export default LoginPage;
