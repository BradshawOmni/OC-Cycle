import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import RolesInit from './components/login/RolesInit';
import CustomerPage from './components/customers/CustomerPage';
import ManageCustomerPage from './components/customers/ManageCustomerPage';
import ClientMap from './components/clientMap/ClientMap';
import InProduction from './components/inProduction/InProduction';
import ManageAccountPage from './components/account/ManageAccountPage';
import AccountPage from './components/account/AccountPage';
import ManageInvoicePage from './components/invoice/ManageInvoicePage';
import InvoicePage from './components/invoice/InvoicePage';
import PersonPage from './components/person/PersonPage';
import ManagePersonPage from './components/person/ManagePersonPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="logininit" component={RolesInit} />
    <Route path="customers" component={CustomerPage} />
    <Route path="customer" component={ManageCustomerPage} />
    <Route path="customer/:id" component={ManageCustomerPage} />
    <Route path="clientMap" component={ClientMap} />
    <Route path="inProduction" component={InProduction} />
    <Route path="accounts" component={AccountPage} />
    <Route path="account" component={ManageAccountPage} />
    <Route path="account/:id" component={ManageAccountPage} />
    <Route path="invoices" component={InvoicePage} />
    <Route path="invoice" component={ManageInvoicePage} />
    <Route path="invoice/:id" component={ManageInvoicePage} />
    <Route path="persons" component={PersonPage} />
    <Route path="person" component={ManagePersonPage} />
    <Route path="person/:id" component={ManagePersonPage} />

  </Route>
);

