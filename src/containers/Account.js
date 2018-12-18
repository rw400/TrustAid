import React from 'react';
import Header from '../components/header/header';

export default class Account extends React.Component {

  render() {
    return (
      <div>
        <Header title="Account Page"/>
        <h1>Account Summary:</h1>
        <h3>{this.props.match.params.id}</h3>
      </div>
    )
  }
}
