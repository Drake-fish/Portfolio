import React from 'react';
import {Link} from 'react-router';
import Nav from '../Components/nav';

export default React.createClass({
  render(){
    return (
        <div>
          <div className="header">
            <h2><Link to="/">Drake Fish</Link></h2>
          </div>
      <figure className="resume-figure">
        <img src="../../assets/images/Drake-Fish-Resume.png"/>
      </figure>
      </div>
    );
  }
});
