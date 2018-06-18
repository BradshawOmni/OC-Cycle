import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    customerId: 1,
    cuName: 'Inspire Federal Credit Union',
    contactName: 'Alexis',
    contactEmail: 'alexis@inspirefcu.org',
    contactNumber: '8888888888',
    customerTypeId: 1,
  },
  {
    customerId: 2,
    cuName: 'Dade County Federal Credit Union',
    contactName: 'Moe',
    contactEmail: 'moe@dcfcu.org',
    contactNumber: '8888888888',
    customerTypeId: 2,
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customers) => {
  return Math.max.apply(Math, customers.map((s) => { return s.customerId; })) + 1;

};

class customerApi {
   
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {    
      setTimeout(() => {
        // Simulate server-side validation
        const mincustomerNameLength = 3;
        if (customer.firstName.length < mincustomerNameLength) {
          reject(`First name must be at least ${mincustomerNameLength} characters.`);
        }

        if (customer.lastName.length < mincustomerNameLength) {
          reject(`Last name must be at least ${mincustomerNameLength} characters.`);
        }

        //debugger;
        if (customer.customerId) {
            console.log('Get All Customers Called in Customer.js ');
          const existingcustomerIndex = customers.findIndex(a => a.customerId === customer.customerId);
          customers.splice(existingcustomerIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.customerId = generateId(customers);
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deletecustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfaddresesToDelete = customers.findIndex(customer => {
          customer.customerId == customerId;
        });
        customers.splice(indexOfaddresesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default customerApi;
