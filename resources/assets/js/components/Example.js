import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-centered">Horror Trumps</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Monster />
                    </div>
                    <div className="col-md-6">
                        <Monster />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
