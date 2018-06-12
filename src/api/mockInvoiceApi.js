import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const invoices = [
  {
    invoiceId: 1357,
    title: 'Judson Invoice 5/12/2016',
    lineItems: [
      {itemId: 1, item: 'Month of Care', quantity: 4, costPer: 12.88},
      {itemId: 2, item: 'Snacks', quantity: 30, costPer: 1.50},
      {itemId: 3, item: 'Fun Time', quantity: 1, costPer: 100.67}
    ]
  },
  {
    invoiceId: 4567,
    title: 'Bradshaw Invoice 4/12/2015',
    lineItems: [
      {itemId: 1, item: 'Month of Care', quantity: 6, costPer: 12.88},
      {itemId: 2, item: 'Clothes', quantity: 10, costPer: 11.50},
      {itemId: 3, item: 'Transportation', quantity: 2, costPer: 32.95}
    ]
  },
  {
    invoiceId: 2345,
    title: 'Baker Invoice 3/15/2016',
    lineItems: [
      {itemId: 1, item: 'Month of Care', quantity: 2, costPer: 12.88},
      {itemId: 2, item: 'Wait time', quantity: 10, costPer: 20.55},
      {itemId: 3, item: 'Transportation', quantity: 1, costPer: 32.95}
    ]
  },
  {
    invoiceId: 1234,
    title: 'Jones Invoice 7/31/2017',
    lineItems: [
      {itemId: 1, item: 'Month of Care', quantity: 2, costPer: 12.88},
      {itemId: 2, item: 'Snacks', quantity: 25, costPer: 1.50},
      {itemId: 3, item: 'Wait time', quantity: 4, costPer: 20.55}
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
