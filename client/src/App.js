import React, { Component } from 'react';

import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>Solar City Interest Form</h3>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
