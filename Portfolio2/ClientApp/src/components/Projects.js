// External Dependencies
import React, { Component } from 'react';

// Child Components
import { PageHeader } from './Shared/PageHeader';

export class Projects extends Component {
    //static displayName = Projects.name;
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }

    // -------------------------
    // Network Requests
    // -------------------------

    componentDidMount() {
        fetch('api/controller/GetProjects').then(results => {
                return results.json();
        }).then(data => {        
            //putting JSON objects into component state.
            this.setState({ projects: data });
        })
    }

    // -------------------------
    // Component Builders
    // -------------------------

    buildProjectRows(projects) {
        console.log(projects);
        const projectRows = [];

        projects.forEach((project) => {
            projectRows.push(
                <div key={project.projectId}>
                    <p>{project.name}</p>
                    <p>This is my project description</p>
                </div>
            )
        })
        return projectRows;
    }

    render() {
        console.log('RENDERING')
        return (
            <div className="pageContent">
                <div id='homeComponent'>

                    <PageHeader header='Projects' />
                    
                    <h3 id="summary"> Summary</h3>

                    {this.buildProjectRows(this.state.projects)}
                </div>
            </div>
        );
    }
}