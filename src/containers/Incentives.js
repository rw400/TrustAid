import React from 'react';
import Header from '../components/header/header';

class Incentives extends React.Component {

  render() {
    return (
      <div>
        <Header title="Incentives Page"/>
        <h1>Incentives Redeem</h1>
        <h2>Benefits</h2>
        <h3>{this.props.match.params.id}</h3>
      </div>
    )
  }
}
export default Incentives;