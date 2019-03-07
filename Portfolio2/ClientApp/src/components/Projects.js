// External Dependencies
import React, { Component } from 'react';
import './Css/Projects.css';
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
    // Component Builders    // bulids the jsx can be called in render.
    // -------------------------

    //buildProjectRows(projects) {
    //    console.log(projects);
    //    const projectRows = [];

    //    projects.forEach((project) => {
    //        projectRows.push(
    //            <div key={project.projectId}>
    //                <p>{project.name}</p>
    //                <p>This is my project description</p>
    //            </div>
    //        )
    //    })
    //    return projectRows;
    //}

    displayProjectNames(projects) {
        const projectNames = [];

        projects.forEach((project) => {
            projectNames.push(
                <div className="col-lg-4 centerNames">
                    <p>{project.name}</p>
                </div>
            )
        })
        return projectNames;
    }

    render() {
        console.log('RENDERING')
        return (
            <div className="pageContent">
                <div id='homeComponent'>

                    <PageHeader header='Projects' />                                    

                    <div className="row">
                        {this.displayProjectNames(this.state.projects)}
                    </div>
                    

                    {/*{this.buildProjectRows(this.state.projects)} */}
                </div>
            </div>
        );
    }
}