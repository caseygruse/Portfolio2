import React, { Component } from 'react';

export class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1 id="title"> {this.props.header} </h1>
    }
}