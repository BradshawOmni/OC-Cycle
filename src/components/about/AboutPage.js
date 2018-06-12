import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application is used for NextCARE customers.</p>
        <ul>View:
          <li>Account Information</li>
          <li>Invoices</li>
          <li>Messages</li>
          <li>Room Feed</li>
      </ul>
      </div>
    );
  }
}

export default AboutPage;
