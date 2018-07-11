import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import SelectInput from '../common/SelectInput';
import { browserHistory } from 'react-router';

class RolesInit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        errors: ""
    }
    
  }
  render() {
    const{ users} = this.props;
    console.log(users);
    const {customer, beenServed, onSave, onChange, saving, errors} = this.props;
    return (
      <div className="container RolesInit">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body text-center">
                  <div>
                   <img className = "responsive-img rounded-circle" src = "https://lh4.googleusercontent.com/-9RX-cbUSWbI/AAAAAAAAAAI/AAAAAAAAACA/ph7wl-BfxrY/photo.jpg" width = "100"/>
                  </div>
               
                  <div className="row text-center">
                    <div className = "col-6 offset-3">
                        <SelectInput
                        name="beenServed"
                        label="Please Select The Department You Will Be Working In"
                        value={''}
                        options={['Sales', 'Development']}
                        onChange={'onChange'}
                        error={errors} />
                    </div>
                    <div className="col-12 text-center">
                    <a href="/auth/google" ><button type="button" className="btn px-4 OmniCommanderBtn" onClick={ '' }>
                    <i className="fab fa-google"></i> Submit</button></a>
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
RolesInit.propTypes = {
 
};


export default RolesInit;
