import React, { Component } from 'react';
import './EducationCss.css';
export class Education extends Component {
    
    static displayName = Education.name;

    render() {
        return (
            <div className='pageContent'>
            <div id='educationComponent'>
                <h1 id="title"> Education </h1>
                <h3 id="summary"> Summary</h3>
                </div>
            </div>
        );
    }
}