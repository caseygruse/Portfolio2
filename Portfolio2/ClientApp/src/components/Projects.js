import React, { Component } from 'react';

export class Projects extends Component {
    //static displayName = Projects.name;
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        fetch('api/controller/GetProjects')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                let projects = data.map((Project) => {
                    return (
                        <div key={Project.results}>
                            <p>{Project.Name}</p>
                        </div>
                    )
                })
                this.setState({ projects: projects });

                })
        }
    
    fetchData() { }
    
    render() {
        return (
            <div>
                {this.state.projects}

                <h1 id="title"> Projects </h1>
                <h3 id="summary"> Summary</h3>
            </div>
        );
    }
}