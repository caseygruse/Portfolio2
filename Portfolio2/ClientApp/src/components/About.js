import React, { Component } from 'react';

export class About extends Component {

    static displayName = About.name;

    render() {
        return (
            <div>
                <h1> Education </h1>
                <h3 id="summary"> Summary</h3>
            </div>
        );
    }
}