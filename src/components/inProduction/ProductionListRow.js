import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ProductionListRow extends Component {

  render() {
    const {customer} = this.props;
    return (

      <Link className="list-group-item list-group-item-action flex-column align-items-start" to={'/customer/' + customer.customerId}  >
        <div className="row">  
          <div className="col-sm-3"><strong>{customer.cuName}</strong></div>
          <div className="col-sm-2">{customer.contactName}</div>
          <div className="col-sm-3">{customer.contactEmail}</div>
          <div className="col-sm-2">{customer.contactNumber}</div>
        </div>
      </Link>
    );
  }
}

ProductionListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default ProductionListRow;
