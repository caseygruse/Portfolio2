import React, { Component } from 'react';
import { PageHeader } from './Shared/PageHeader';
import './Css/Project2.css';
let projectPics = [];

export class Project2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            singleProject: "",
        };
    };


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
        //fill projectPics with project screen shots that match the order of projects
        //EliteK9 0
        projectPics.push(<img src={require('../Images/EliteK9ScreenShot.PNG')} alt="screen shot of a Yahtzy game" className="projectPic" />)
        //yahtzy 1                          
        projectPics.push(<img src={require('../Images/yatzyImg.PNG')} alt="screen shot of a Yahtzy game" className="projectPic" />);
    }

    // -------------------------
    // Component Builders    // bulids the jsx can be called in render.
    // -------------------------

    buildProjectRows(projects) {
        console.log(projects);
        const projectRows = [];

        projects.forEach((project) => {
            projectRows.push(
                <div className="box" key={project.projectId}>                  
                        <p>{project.name}</p>
                        <p>{project.summary}</p>                   
                </div>
            )
        })
        return projectRows;
    }


    render() {
        console.log('RENDERING')
        return (
            <div className="pageContent">
                <div id='projects2'>

                    <PageHeader header='Projects' /> 

                    <div className="projectContainer">
                        {this.buildProjectRows(this.state.projects)}
                    </div>
                </div>
            </div>
        );
    }
}
