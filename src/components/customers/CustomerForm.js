import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import SelectInput from '../common/SelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CustomerForm extends Component {

  render() {

    const {customer, beenServed, onSave, onChange, saving, errors} = this.props;
    
    const returnToPreviousPage = () => {
      browserHistory.push('/customers');
    };

    return (
      <div className="container-fluid omniComp">
        <div className="row">
          <div className = "pageHeaders">
              <div className="col-md-12">
                  <h2>{customer.cuName}</h2>
                  <h3>Account Details</h3>
              </div>
          </div>
        </div>
       
        <form>
          <div className="row">
            <div className="col-lg-4">
            <TextInput 
               name="cuName"
               label="Credit Union"
               placeholder="Enter Credit Union Name"
               value={customer.cuName}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            <div className="col-lg-4">
            <TextInput 
               name="cuName"
               label="POC"
               placeholder="Enter POC Full Name"
               value={customer.contactName}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4">
            <TextInput 
               name="contactEmail"
               label="Contact Email Address"
               placeholder="Enter Contact Email Address"
               value={customer.contactEmail}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            <div className="col-lg-4">
            <TextInput 
               name="contactPhone"
               label="Contact Phone Number"
               placeholder="Enter Contact Phone"
               value={customer.contactNumber}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <label htmlFor="walkthroughDate">Walkthrough Date</label>
              <DatePicker name="walkthroughDate"
             
              addClass="medium-textbox"
              selected={moment(customer.walkThroughDate)}
              onChange={onChange}
              />
              <br />
            </div>
            <div className="col-lg-3">
                <label htmlFor="contractSentDate">Contract Sent Date</label>
                <DatePicker name="contractSentDate"
                addClass="medium-textbox"
                selected={moment(customer.contractSentDate)}
                onChange={onChange}
              />
              <br />
            </div>
            <div className="col-lg-3">
              <label htmlFor="contractSignedDate">Contract Signed Date</label>
              <DatePicker name="contractSignedDate"
              addClass="medium-textbox"
              selected={moment(customer.contractSignedDate)}
              onChange={onChange}
              />
            <br />
          </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <TextArea
                name="servicesProposed"
                label="Services Proposed"
                placeholder="Services Proposed"
                value={customer.servicesProposed}
                onChange={onChange}
                addClass="medium-textbox"
                error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <TextArea
                name="servicesSold"
                label="Services Sold"
                placeholder="Services Sold"
                value={customer.servicesSold}
                onChange={onChange}
                addClass="medium-textbox"
                error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
            <SelectInput
             name="beenServed"
             label="Has the client been served?"
             value={customer.beenServed}
             options={beenServed}
             onChange={onChange}
             error={errors.beenServed} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <TextArea
                name="websitesClientLikes"
                label="Websites Client Likes"
                placeholder="Websites That The Client Likes"
                value={customer.websitesClientLikes}
                onChange={onChange}
                addClass="medium-textbox"
                error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <TextArea
                name="interestingClientFacts"
                label="Interesting Facts About The Client"
                placeholder="Interesting Facts About The Client"
                value={customer.interestingClientFacts}
                onChange={onChange}
                addClass="medium-textbox"
                error='' />
            </div>
          </div>
          <div className = "row">
            <div className = "col-lg-3">
            <input
             type="submit"
             disabled={saving}
             value={saving ? 'Saving...' : 'Save'}
             className="btn btn-primary btn-lg"
             onClick={onSave} />
            </div>
          </div>
          
        </form>
        </div>



        
  

      
      
     
    );
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CustomerForm;
