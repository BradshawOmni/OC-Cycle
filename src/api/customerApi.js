import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    customerId: 1,
    customerTypeId: 1,
    cuName: 'Inspire Federal Credit Union',
    contactName: 'Alexis',
    contactEmail: 'alexis@inspirefcu.org',
    contactNumber: '8888888888',
    walkThroughDate: '2017-07-12T00:00:00',
    servicesProposed: 'Website / Host / Monthly ADA Scans/ Social Media/ Landing Page/ Live Chat/ Promet',
    servicesSold: 'Website / Host / Quarterly ADA Scans/ Live Chat (1) license ',
    beenServed: true,
    websitesClientLikes: 'Chattanooga, Core, Port Arthur Teachers',
    interestingClientFacts: 'Very elusive, Easy going, and super nice',
  },
  {
    customerId: 2,
    customerTypeId: 2,
    cuName: 'Dade County Federal Credit Union',
    contactName: 'Moe',
    contactEmail: 'moe@dcfcu.org',
    contactNumber: '8888888888',
    walkThroughDate: '2017-07-12T00:00:00',
    servicesProposed: 'Website / Host / Monthly ADA Scans/ Social Media/ Landing Page/ Live Chat/ Promet',
    servicesSold: 'Website / Host / Quarterly ADA Scans/ Live Chat (1) license ',
    beenServed: true,
    websitesClientLikes: 'Inspire, Savannah',
    interestingClientFacts: 'Very elusive, Easy going, fucks with chickens',
  },
  {
    customerId: 3,
    customerTypeId: 3,
    cuName: 'Panhandle Educators Federal Credit Union',
    contactName: 'Person',
    contactEmail: 'person@pefcu.org',
    contactNumber: '8888888888',
    walkThroughDate: '2017-07-12T00:00:00',
    servicesProposed: 'Website / Host / Monthly ADA Scans/ Social Media/ Landing Page/ Live Chat/ Promet',
    servicesSold: 'Website / Host / Quarterly ADA Scans/ Live Chat (1) license ',
    beenServed: false,
    websitesClientLikes: 'Inspire, Savannah, Dade',
    interestingClientFacts: 'Quiet, Smelly',
  },
  {
    customerId: 4,
    customerTypeId: 4,
    cuName: 'New York University Federal Credit Union',
    contactName: 'Angla',
    contactEmail: 'angla@nyufcu.edu',
    contactNumber: '8888888888',
    walkThroughDate: '2017-07-12T00:00:00',
    contractSentDate: '2017-07-12T00:00:00',
    contractSignedDate: '2017-08-12T00:00:00',
    servicesProposed: 'Website / Host / Monthly ADA Scans/ Social Media/ Landing Page/ Live Chat/ Promet',
    servicesSold: 'Website / Host / Quarterly ADA Scans/ Live Chat (1) license ',
    beenServed: false,
    websitesClientLikes: 'Savannah, Panhandle Teachers, NYUFCU',
    interestingClientFacts: 'Fucks with chickens like all day',
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
