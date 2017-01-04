import React from 'react';
import {Link} from 'react-router';
import Nav from '../Components/nav';
import Portfolio from '../Components/Portfolio';
import About from '../Components/About';
import Contact from '../Components/Contact';

export default React.createClass({
  render(){
    return(
          <div className="home-container">
            <div className="home">
              <div className="header">
                <h2>Drake Fish</h2>
                <Nav/>
              </div>
              <div className="intro">
                <h2>HELLO</h2>
                <h2 className="tag">My name is Drake. I am an Austin based front-end developer creating memorable experiences by exploring and pushing the web to new heights.</h2>
                <a href="#portfolio"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
              </div>
              <div className="profile-photo">
               <img src="../assets/images/portfoliopic.png"/>
              </div>
            </div>
            <Portfolio/>
            <About/>
            <div className="contact-bottom">
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
    );
  }
});
