import React from 'react';

export default React.createClass({
  render(){
    return(
      <div className="about" id="about">
        <h2>ABOUT</h2>
        <img className="about-photo" src="../assets/images/about-pic.png"/>
        <div className="skills">
          <img className="badge" src="../assets/images/htmlbadge.png"/>
          <img className="badge" src="../assets/images/cssbadge.png"/>
          <img className="badge" src="../assets/images/javascriptbadge.png"/>
          <img className="badge" src="../assets/images/sassbadge.png"/>
          <img className="badge" src="../assets/images/backbonebadge.png"/>
          <img className="badge" src="../assets/images/reactbadge.png"/>
        </div>
        <p>I am a front-end developer born and raised in Austin, Texas. As a recent graduate from the Iron Yard coding school I have spent the last 12 weeks sharpening coding skills. With a background in management I pride myself on leadership and managing my time to beat deadlines. I love to learn and create new things everyday, and when I am not coding, I love to be outdoors exploring with my dog and being in the company of good friends.</p>
        <h3>LETS TALK!</h3>
        <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      </div>
    );
  }
});
