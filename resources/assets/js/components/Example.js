import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    {/* <h5 class="card-title">{{$monster->name}}</h5> */}
                    <div class="card_attribute-wrapper">
                        {/* <div>Physical Strength: {{$monster->physical_strength}}</div> */}
                        <a href="#" class="btn btn-primary attribute-button" id="physicalStrength">Select Physical Strength</a>
                    </div>
                    <div class="card_attribute-wrapper">
                        {/* <div>Fear Factor: {{$monster->fear_factor}}</div> */}
                        <a href="#" class="btn btn-primary attribute-button" id="fearFactor">Select Fear Factor</a>
                    </div>
                    <div class="card_attribute-wrapper">
                        {/* <div>Killing Power: {{$monster->killing_power}}</div> */}
                        <a href="#" class="btn btn-primary attribute-button" id="killingPower">Select Killing Power</a>
                    </div>
                    <div class="card_attribute-wrapper">
                        {/* <div>Horror Rating: {{$monster->horror_rating}}</div> */}
                        <a href="#" class="btn btn-primary attribute-button" id="horrorRating">Select Horror Rating</a>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
