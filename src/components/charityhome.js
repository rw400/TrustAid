import React, {Component} from 'react';
import Charity from '../containers/Charity';

// CSS
import "./charityhome.css";

class Charityhome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="charityhome-container">
            <h1>Trusted Charities:</h1>
            {this.renderCharities()}
            <div className="charity-list">
                <h2>Red Cross</h2>
                <h2>Recent Global Relief Crisis</h2>
                <h2>Food Banks</h2>
                {/* <Charity selectCharity={this.props.selectCharity} /> */}
            </div>

            <h3>Help donate, recieve tokens and save on future inventory purshases from manufactures. Support local farmers!</h3>

            <h3>Bonus tokens for bulk orders and urgent requests!</h3>
            <h3>Sign up for a verified account for bonus incentives!</h3>
                
        </div>
    )
    }
}

export default Charityhome;