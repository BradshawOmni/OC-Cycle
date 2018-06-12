/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadStudents } from './actions/studentActions';
import { loadPhones } from './actions/phoneActions';
import {loadAccounts} from './actions/accountActions';
import {loadInvoices} from './actions/invoiceActions';
import { loadStates } from './actions/stateActions';
import { loadAddresses } from './actions/addressActions';
import { loadAddressTypes } from './actions/addressTypeActions';
import './styles/styles.css'; // webpack can import CSS files too!
import './styles/lessStyle.less';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';


const store = configureStore();
store.dispatch(loadStudents());
store.dispatch(loadPhones());
store.dispatch(loadAccounts());
store.dispatch(loadInvoices());
store.dispatch(loadAddresses());
store.dispatch(loadAddressTypes());
store.dispatch(loadStates());


/* jshint ignore:start */
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
/* jshint ignore:end */
