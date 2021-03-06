﻿/// <reference path="openingstatement.js" />
// External Dependencies
import React, { Component } from 'react';
import './Css/Projects.css';
// Child Components
import { PageHeader } from './Shared/PageHeader';

//let contents;

export class Projects extends Component {
    //static displayName = Projects.name;
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            singleProject: "",
        };
        
        this.displayProject = this.displayProject.bind(this);
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

    
    ///loops through projects and displays names on buttons
    ///onclicks will display project information below the buttons.
    displayProjectNames(projects) {
        const projectNames = [];
        projects.forEach((project) => {
            projectNames.push(
                <div key={project.projectId} className="col-lg-4 centerNames">
                    <button onClick={() => this.displayProject(projects, project.name)}>{project.name}</button>                          
                </div>               
            )
        })
        //https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
        return projectNames;
    }

    ///TO DO:  When project name is clicked display all project properites below project names.
    displayProject(projects, projectName) {
        for (var i = 0; i < projects.length; i++) {
            if (projectName === projects[i].name) {
                //the project name button that is clicked will display
                //the projects info by changing singlePorjects state.
                this.setState({
                    singleProject: <div> <p>{projects[i].name}</p></div>});
            }
        }
        //return singleProject;
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
                    
                    <div>{this.state.singleProject}</div>

                    {/*{this.buildProjectRows(this.state.projects)} */}
                </div>
            </div>
        );
    }
}
