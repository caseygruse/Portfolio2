import React, { Component } from 'react';
import { PageHeader } from './Shared/PageHeader';

export class About extends Component {

    static displayName = About.name;

    render() {
        return (
            <div className="pageContent">
                <div id="aboutComponent">
                    <PageHeader header="About" />
                </div>
            </div>
        );
    }
}