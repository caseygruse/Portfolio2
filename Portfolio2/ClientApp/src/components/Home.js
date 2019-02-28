import React, { Component } from 'react';
import { OpeningStatement } from './OpeningStatement';
import './Home.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;
 
  render () {
      return (
        <div>
            <OpeningStatement />  
              <div id="main">
                  {/* find out why first last pushes main down and not just the names. */}
                <div id="firstLast">
                    <h1 class="name">Casey</h1>
                    <h2 class="name">Gruse</h2>      
                  </div> 

                  <div class="row">
                      <div class="col-lg-4 col-xs-12">
                          <div class="left" tag={Link} to="/">Home</div>
                      </div>
                      <div class="col-lg-4 col-xs-12">
                          <div class="middle" tag={Link} to="/Education">Education</div>
                      </div>
                      <div class="col-lg-4 col-xs-12">
                          <div class="right" tag={Link}  to="/About">About</div>
                      </div>
                      
                  </div>

            </div>
        </div>
          
    );
  }
}



