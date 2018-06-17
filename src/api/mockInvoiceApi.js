import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const invoices = [
  {
    invoiceId: 13,
    invoiceTypeId: 2,
    invoiceNumber: 'TSX7611',
    invoiceOwnerId: 10,
    description: 'Judson Invoice 5/12/2016',
    paid: true,
    invoiceLine: [
      {invoiceLineId: 1, description: 'Month of Care', quantity: 4, cost: 12.88, paid: true},
      {invoiceLineId: 2, description: 'Snacks', quantity: 30, cost: 1.50, paid: true},
      {invoiceLineId: 3, description: 'Fun Time', quantity: 1, cost: 100.67, paid: true}
    ]
  },
  {
    invoiceId: 14,
    invoiceTypeId: 2,
    invoiceNumber: 'NPR1635',
    invoiceOwnerId: 8,
    description: 'Bradshaw Invoice 4/12/2015',
    invoiceLine: [
      {invoiceLineId: 1, description: 'Month of Care', quantity: 6, cost: 12.88, paid: true},
      {invoiceLineId: 2, description: 'Clothes', quantity: 10, cost: 11.50, paid: true},
      {invoiceLineId: 3, description: 'Transportation', quantity: 2, cost: 32.95, paid: true}
    ]
  },
  {
    invoiceId: 6,
    invoiceTypeId: 1,
    invoiceNumber: 'NHTY72958',
    invoiceOwnerId: 8,
    description: 'Baker Invoice 3/15/2016',
    invoiceLine: [
      {invoiceLineId: 1, description: 'Month of Care', quantity: 2, cost: 12.88, paid: true},
      {invoiceLineId: 2, description: 'Wait time', quantity: 10, cost: 20.55, paid: true},
      {invoiceLineId: 3, description: 'Transportation', quantity: 1, cost: 32.95, paid: true}
    ]
  },
  {
    invoiceId: 3,
    invoiceTypeId: 1,
    invoiceNumber: '4117658',
    invoiceOwnerId: 8,
    description: 'Jones Invoice 7/31/2017',
    invoiceLine: [
      {invoiceLineId: 1, description: 'Month of Care', quantity: 2, cost: 12.88, paid: true},
      {invoiceLineId: 2, description: 'Snacks', quantity: 25, cost: 1.50, paid: true},
      {invoiceLineId: 3, description: 'Wait time', quantity: 4, cost: 20.55, paid: true}
    ]
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (invoices) => {
  return Math.max.apply(Math, invoices.map((s) => { return s.invoiceId; })) + 1;
};

class invoiceApi {
  static getAllInvoices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], invoices));
      }, delay);
    });
  }

  static saveInvoice(invoice) {
    invoice = Object.assign({}, invoice); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        if (invoice.invoiceId) {
          const existinginvoiceIndex = invoices.findIndex(a => a.invoiceId === invoice.invoiceId);
          invoices.splice(existinginvoiceIndex, 1, invoice);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new invoices in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          invoice.invoiceId = generateId(invoices);
          invoices.push(invoice);
        }

        resolve(invoice);
      }, delay);
    });
  }

  static deleteInvoice(invoiceId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfaddresesToDelete = invoices.findIndex(invoice => {
          invoice.invoiceId == invoiceId;
        });
        invoices.splice(indexOfaddresesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default invoiceApi;
