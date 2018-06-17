import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InvoiceItemListRow from './InvoiceItemListRow';
import toastr from 'toastr';

class InvoiceList extends Component {
  buildTotalLine(invoice) {
    let tot = 0;
    tot = invoice.invoiceLine.map(item => {
      return item.cost * item.quantity;
    });

    return tot.reduce(this.getSum);
  }

  getSum(total, num) {
    return total + num;
  }

  render () {
    const invoice = this.props.invoice;
    const totLine = {description: 'Total', total: this.buildTotalLine(invoice), quantity: 0, cost: 0};
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-lg-2">Item</div>
          <div className="col-sm-2">Quantity</div>
          <div className="col-sm-2 ml-3">Cost Per</div>
        </div>
        {invoice.invoiceLine.map(line =>
          <InvoiceItemListRow key={line.invoiceLineId} line={line} />
        )}
        <InvoiceItemListRow key="99999" line={totLine} />
      </div>
    );
  }
}

InvoiceList.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoiceList;
