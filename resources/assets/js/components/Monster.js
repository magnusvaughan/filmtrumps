import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';

export default class Monster extends Component {

    render() {
        return (
            <div className="card">
                <h2 className="card-title">{this.state.monster.name}</h2>
                <img className="card-img-top" style={{width: 526 + 'px', height: 480 + 'px'}} src={"/img/" + this.state.monsterId + ".png"} alt=""/>
                <ul>
                    <li>Physical Strength: 
                    <button type="button" className="btn btn-danger">{this.state.monster.physical_strength}</button>
                    </li>
                    <li>Fear Factor: 
                    <button type="button" className="btn btn-danger">{this.state.monster.fear_factor}</button>
                    </li>
                    <li>Killing Power:
                    <button type="button" className="btn btn-danger">{this.state.monster.killing_power}</button>
                    </li>
                    <li>Horror Rating:
                    <button type="button" className="btn btn-danger">{this.state.monster.horror_rating}</button>
                    </li>
                </ul>
            </div>
        );
    }
}

if (document.getElementById('monster')) {
    ReactDOM.render(<Monster />, document.getElementById('monster'));
}
