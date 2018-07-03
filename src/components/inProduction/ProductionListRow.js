import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ProductionListRow extends Component {

  render() {
    const {customer} = this.props;
    return (
        
          <div className = "row prodListContainer">
            <div className="col-sm-3"><strong>{customer.cuName}</strong></div>
            <div className="col-sm-2">Add Signed Date</div>
            <div className="col-sm-3">Add Kickoff Call Date</div>
            <div className="col-sm-2">Add Prospective Go Live Date (Add and icon if a firm date)</div>
          </div>
        

    );
  }
}

ProductionListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default ProductionListRow;
