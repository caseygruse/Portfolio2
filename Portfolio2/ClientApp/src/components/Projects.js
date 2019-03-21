// External Dependencies
import React, { Component } from 'react';
import './Css/Projects.css';
// Child Components
import { PageHeader } from './Shared/PageHeader';

let contents;

export class Projects extends Component {
    //static displayName = Projects.name;
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            singleProject: [],
        };
        this.displayProjectInformation = this.displayProjectInformation.bind(this);
        this.displayProjectNames = this.displayProjectNames.bind(this);
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

    ///displays project names 
    ///loops through projects and displays names  
    displayProjectNames(projects) {
        const projectNames = [];
        
        projects.forEach((project) => {
            projectNames.push(
                <div key={project.projectId} className="col-lg-4 centerNames">
                    <button onClick={this.displayProjectInformation(projects, project.name)}> {project.name} </button>                          
                </div>               
            )
        })

        //https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method

        return projectNames;
    }
    //pass btn value by using this.value

    ///TO DO:  When project name is clicked display all project properites below project names.

    render() {
        console.log('RENDERING')
        return (
            <div className="pageContent">
                <div id='homeComponent'>

                    <PageHeader header='Projects' />                                    

                    <div className="row">
                        {this.displayProjectNames(this.state.projects)}
                    </div>

                    {contents}

                    {/*{this.buildProjectRows(this.state.projects)} */}
                </div>
            </div>
        );
    }
}
