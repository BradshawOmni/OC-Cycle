import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ManageAccountPage from './components/account/ManageAccountPage';
import AccountPage from './components/account/AccountPage';
import ManageInvoicePage from './components/invoice/ManageInvoicePage';
import InvoicePage from './components/invoice/InvoicePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="accounts" component={AccountPage} />
    <Route path="account" component={ManageAccountPage} />
    <Route path="account/:id" component={ManageAccountPage} />
    <Route path="invoices" component={InvoicePage} />
    <Route path="invoice" component={ManageInvoicePage} />
    <Route path="invoice/:id" component={ManageInvoicePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);

/*
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

    <Route path="academy" component={ManageAcademyPage} />
    <Route path="academy/:id" component={ManageAcademyPage} />
*/
