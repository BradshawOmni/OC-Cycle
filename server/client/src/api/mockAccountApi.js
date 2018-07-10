import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const accounts = [
  {
    accountId: 1,
    owner: {
      lname: 'Smith',
      fname: 'James'
    },
    address: {
      addressLine1: '123 Raining Blvd',
      addressLine2: '',
      stateId: 1,
      city: 'Remlap',
      zip: '11111'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      },
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
   ],
    emails: [
      {
      address: 'joe.smith@email.com',
      type: 'Home',
      isPrimary: true
      }
    ],
    students: [
       {
        fname: 'Jane',
        lname: 'Smith',
        age: 6,
        sex: 'F'
      },
      {
        fname: 'Mark',
        lname: 'Smith',
        age: 4,
        sex: 'M'
      }
    ]
  },
  {
    accountId: 2,
    owner: {
      lname: 'Jones',
      fname: 'Peter'
    },
    address: {
      addressLine1: '999 Anyway St',
      addressLine2: '',
      stateId: 16,
      city: 'Small Town',
      zip: '22222'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
    ],
    emails: [
      {
        address: 'joe.smith@email.com',
        type: 'Home',
        isPrimary: true
      }
    ],
    students: [
      {
        fname: 'Sam',
        lname: 'Jones',
        age: 4,
        sex: 'M'
      }
    ]
  },
  {
    accountId: 3,
    owner: {
      lname: 'Collins',
      fname: 'Jane'
    },
    address: {
      addressLine1: '88 Pair Ave N',
      addressLine2: '',
      stateId: 1,
      city: 'St Paul',
      zip: '33333'
    },
    phones: [
      {
        number: '850-555-1212',
        type: 'Cell',
        isPrimary: true
      }
    ],
    emails: [
      {
        address: 'joe.smith@email.com',
        type: 'Work',
        isPrimary: true
      }
    ],
    students: [
     {
        fname: 'Pam',
        lname: 'Collins',
        age: 5,
        sex: 'F'
      }
    ]
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (accounts) => {
  return Math.max.apply(Math, accounts.map((s) => { return s.accountId; })) + 1;
};

class accountApi {
  static getAllAccounts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], accounts));
      }, delay);
    });
  }

  static saveAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minaccountNameLength = 3;
        if (account.line1.length < minaccountNameLength) {
          reject(`Aaccount Line 1 must be at least ${minaccountNameLength} characters.`);
        }

        if (account.stateId <= 0) {
          reject('No State has been selected.');
        }
        //debugger;
        if (account.accountId) {
          const existingaccountIndex = accounts.findIndex(a => a.accountId === account.accountId);
          accounts.splice(existingaccountIndex, 1, account);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new accounts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          account.accountId = generateId(accounts);
          accounts.push(account);
        }

        resolve(account);
      }, delay);
    });
  }

  static deleteAccount(accountId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfaddresesToDelete = accounts.findIndex(account => {
          account.accountId == accountId;
        });
        accounts.splice(indexOfaddresesToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default accountApi;
