import React, { Component } from 'react';
import { OpeningStatement } from './OpeningStatement';

import './Home.css';

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
            </div>
        </div>
          
    );
  }
}



