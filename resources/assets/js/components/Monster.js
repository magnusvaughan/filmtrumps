import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Monster extends Component {

    constructor() {
   
        super();
        //Initialize the state in the constructor
        this.state = {
            monster: [],
            monsterId: null
        }
      }
      /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
      componentDidMount() {
        /* fetch API in action */
        const monsterId =  Math.ceil((Math.random() * 31));
        this.setState({monsterId: monsterId});
        
        fetch('/monsters/'+ monsterId )
            .then(response => {
                return response.json();
            })
            .then(monster => {
                //Fetched product is stored in the state
                this.setState({ monster });
            });
    }
    render() {
        return (
            <div className="card">
                <h5 className="card-title">{this.state.monster.name}</h5>
                <img className="card-img-top" style={{width: 526 + 'px', height: 480 + 'px'}} src={"/img/" + this.state.monsterId + ".png"} alt=""/>
                <ul>
                    <li>Physical Strength: {this.state.monster.physical_strength}</li>
                    <li>Fear Factor: {this.state.monster.fear_factor}</li>
                    <li>Killing Power: {this.state.monster.killing_power}</li>
                    <li>Horror Rating: {this.state.monster.horror_rating}</li>
                </ul>
            </div>
        );
    }
}

if (document.getElementById('monster')) {
    ReactDOM.render(<Monster />, document.getElementById('monster'));
}
