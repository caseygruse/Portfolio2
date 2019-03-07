import React, { Component } from 'react';
import './EducationCss.css';
import { PageHeader } from './Shared/PageHeader';
export class Education extends Component {
    
    static displayName = Education.name;

    render() {
        return (
            <div className='pageContent'>
            <div id='educationComponent'>
                <PageHeader header="Education" />
                
                </div>
            </div>
        );
    }
}