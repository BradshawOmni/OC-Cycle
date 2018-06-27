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
import { CountryDropdown} from 'react-country-region-selector';

class CustomerForm extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }
  selectCountry (val) {
    this.setState({ country: val });
  }
  render() { 
    const {customer, beenServed, onSave, onChange, saving, errors} = this.props;
    const {country} = this.state;
    const returnToPreviousPage = () => {
      browserHistory.push('/customers');
  };
    return (
      <div className="container-fluid">
      <div className="row">
        <div className = "col-md-12 ">
            <div className = "pageHeaders">
                  <h1>Account Details</h1>
                  <h2>{customer.cuName}</h2>
            </div>
        </div>
      </div>
      <div className = "row">
        <div className = "col-md-6 omniComp">
        <form>
          <div className="row">
            <div className="col-lg-12">
            <TextInput 
               name="cuName"
               label="Credit Union"
               placeholder="Enter Credit Union Name"
               value={customer.cuName}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <TextInput 
               name="cuStreet"
               label="Street Address"
               placeholder="Enter Credit Union Street Address"
               value={customer.cuStreet}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            <div className="col-lg-6">
            <TextInput 
               name="cuStreet2"
               label="Street Address  (Cont)"
               placeholder="Street/Apt Number"
               value={customer.cuStreet2}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <TextInput 
               name="cuCity"
               label="City"
               placeholder="City"
               value={customer.cuCity}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            <div className="col-lg-6">
            <TextInput 
               name="cuState"
               label="State/Province"
               placeholder="State"
               value={customer.cuState}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
          <TextInput 
               name="cuZip"
               label="Zip Code"
               placeholder="Zip Code"
               value={customer.cuZip}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
          </div>
          <div className="col-lg-6">
            <label>Country</label>
              <CountryDropdown
              label="Country"
              value={customer.cuCountry}
              country={customer.cuCountry}
              onChange={(val) => customer.cuCountry(val)}
              classes="form-control medium-textbox" />
          </div>
          </div>
          <div className = "row">
          <div className="col-lg-6">
            <TextInput 
               name="contactName"
               label="Person of Contact"
               placeholder="Enter POC Full Name"
               value={customer.contactName}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            <div className="col-lg-6">
            <TextInput 
               name="contactEmail"
               label="Email Address"
               placeholder="Email Address"
               value={customer.contactEmail}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
          </div>
          <div className = "row">
          <div className="col-lg-6">
            <TextInput 
               name="contactNumber"
               label="Phone Number"
               placeholder="Phone Number"
               value={customer.contactNumber}
               onChange={onChange}
               addClass="medium-textbox"
               error='' />
            </div>
            
          </div>
        </form>
        </div>

        <div className = "col-md-5 omniComp">
        <form>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="walkthroughDate">Walkthrough Date</label>
              <DatePicker name="walkthroughDate"
              className="date-text-box form-control medium-textbox"
              selected={moment(customer.walkThroughDate)}
              onChange={(val) => customer.walkThroughDate}
              />
              <br />
            </div>
            <div className="col-lg-4">
                <label htmlFor="contractSentDate">Contract Sent Date</label>
                <DatePicker name="contractSentDate"
                className="date-text-box form-control medium-textbox"
                selected={moment(customer.contractSentDate)}
                onChange={onChange}
              />
              <br />
            </div>
            <div className="col-lg-4">
              <label htmlFor="contractSignedDate">Contract Signed Date</label>
              <DatePicker name="contractSignedDate"
              className="date-text-box form-control medium-textbox"
              selected={moment(customer.contractSignedDate)}
              onChange={onChange}
              />
            <br />
          </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
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
            <div className="col-lg-12">
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
            <div className="col-lg-3">
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
            <div className="col-lg-12">
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
            <div className="col-lg-12">
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
          <div className="row saveButtons">
         
            <div className = "col-md-3 ">   
              <input
              type="submit"
              disabled={saving}
              value={saving ? 'Saving...' : 'Save'}
              className="btn OmniCommanderBtn col-12"
              onClick={onSave} />
            </div>
            <div className = "col-md-3">
              <button className="btn OmniCommanderBtn col-12"
              type="submit" onClick={returnToPreviousPage}>
                Back
              </button>
            </div>
          </div>
        </form>
        </div> 
      </div>
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
