import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductionListRow from './ProductionListRow';

class ProductionList extends Component {
  render() {
    const {customers} = this.props;
    return (
      <div className="col-md-12">

        <div className="tableHeader">
         
          <div className="col-sm-3">Credit Union</div>
          <div className="col-sm-2">Contact</div>
          <div className="col-sm-3">Email</div>
          <div className="col-sm-2">Phone</div>
        </div>
        <div className="list-group">
        {customers.map(customer =>
          <ProductionListRow key={customer.customerId} customer={customer} />
          )}
        </div>
      </div>
    );
  }
}

ProductionList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default ProductionList;
