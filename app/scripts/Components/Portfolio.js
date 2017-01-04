import React from 'react';

export default React.createClass({
  render(){
    return(
      <div id="portfolio" className="portfolio">
        <h2 className="recent">Recent Work</h2>
        <div className="project1">
          <h2 className="title">I Don't Care You Pick</h2>
          <p>An app to take the hastle out of finding interesting things to do around town. Find food, events, and adventures quickly and easily even when the weather is not ideal.</p>
          <img src="../assets/images/youpick.jpg"/>
          <a className="live" href="https://youpick.surge.sh">View Live</a>
          <a className="code" href="www.github.com/drake-fish/youpick">Code</a>
        </div>
        <div className="project1">
          <h2 className="title">Jeopardy</h2>
          <p>Test your skills in the thrilling game of Jeopardy. Built with React components and Backbone Models and Collections.</p>
          <img src="../assets/images/jeopardy.jpg"/>
          <a className="live" href="https://jeopardygame.surge.sh">View Live</a>
          <a className="code" href="https://github.com/Drake-fish/Jeopardy">Code</a>
        </div>
        <div className="project1">
          <h2 className="title">Bring The Bands</h2>
          <p>Bring the bands is an app built with Backbone framework to vote for your favorite bands to come to our venue! Create an account and make sure we are showcasing the bands you love.</p>
          <img src="../assets/images/bringthebands.jpg"/>
          <a className="live" href="https://youpick.surge.sh">View Live</a>
          <a className="code" href="www.github.com/drake-fish">Code</a>
        </div>
      </div>
    );
  }
});
