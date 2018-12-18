import React from 'react';
import Charityhome from "../components/charityhome";
import Header from '../components/header/header';

class Charity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            charities: []
        };
        this.selectCharity = this.selectCharity.bind(this);
        this.submitCharity = this.submitCharity.bind(this);

    }
    
    selectCharity(event, id){

        event.preventDefault();
        //<button className="btn-select" type="btn btn-sm btn-primary" onClick={(e) => this.SelectCharity(e, id)}>Select</button>
        //this.submitCharity(this.state)        
    }

    submitCharity(){

    }

    componentDidMount() {
    this.setState({charities: [{
        id: 1,
        name: "Red Cross",
        body: "Helping children hospitals - 200 tokens",
        date: "Dec 5 - 25",
        item: "10 First Aid Kits - 200 Tokens",
        verified: "5 Stars"
    }, {
        id: 2,
        name: "Global Crysis Foundation",
        body: "Earthquakes Relief",
        date: "Urgent: Dec 17",
        item: "Transporation - Bonus 300 Tokens",
        verified: "5 Stars"
    }, {
        id: 3,
        name: "Local Food Bank",
        body: "HabourFront Toronto",
        date: "Dec 15 - 20",
        item: "20 Canned foods -50 Tokens",
        verified: "5 Stars"
    }
    ]});    
    }

    renderCharities() {
        return this.state.items.map(charities => {
            return <Charityhome
                key={"charities-" + charities.id}
                name={charities.name}
                body={charities.body}
                date={charities.date}
                item={charities.item}
                verified={charities.verified}
                selectCharity={this.selectCharity}
                
            />
        });
    }
    render(){
        return (
        <div>
            <Header title="Charity Page"/>
            {this.renderCharities()}
            </div>
        )
    }
}

export default Charity;
