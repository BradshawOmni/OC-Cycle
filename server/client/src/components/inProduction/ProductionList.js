import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductionListRow from './ProductionListRow';

class ProductionList extends Component {
  render() {
    const {customers} = this.props;
    return (
      <div className="col-md-12">
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
