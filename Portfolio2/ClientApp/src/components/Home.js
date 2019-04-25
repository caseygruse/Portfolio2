import React, { Component } from 'react';
import { OpeningStatement } from './OpeningStatement';
import './Home.css';
import { Link } from 'react-router-dom';
import { Project2 } from './project2';



export class Home extends Component {
  static displayName = Home.name;
 //https://www.jobscan.co/
  render () {
      return (
        <div className='pageContent'>
            <div id='homeComponent'>                 
                <div id="firstLast">
                    <h1 class="name">Casey</h1>
                    <h2 class="name">Gruse</h2>
                      <img  id="caseyPic" src={require('../Images/caseyPic.jfif')} />
                </div>
                  <OpeningStatement />
                  <Project2 />                 
            </div>
        </div>        
    );
  }
}



