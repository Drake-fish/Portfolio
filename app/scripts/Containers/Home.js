import React from 'react';
import {Link} from 'react-router';
import Nav from '../Components/nav';
export default React.createClass({
  render(){
    return(
          <div className="home-container">
            <div className="accent-top">
            </div>
            <div className="header">
              <h2>Drake Fish</h2>
              <Nav/>
            </div>
            <div className="intro">
              <h2>HELLO</h2>
              <h2 className="tag">My name is Drake and I am a Front-End Developer taking the front-end to the next level.</h2>
              <a href="#portfolio"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>
            <div className="profile-photo">
             <img src="../assets/images/portfoliopic.png"/>
            </div>
            <div id="portfolio" className="portfolio">
              <h2 className="recent">Recent Work</h2>
              <div className="project1">
                <h2 className="title">I DONT CARE YOU PICK APP</h2>
                <p>An app to take the hastle out of finding interesting things to do around town. Find food, events, and adventures quickly and easily even when the weather is not ideal.</p>
                <img src="../assets/images/youpick.jpg"/>
                <a className="live" href="https://youpick.surge.sh">View Live</a>
                <a className="code" href="www.github.com/drake-fish">Code</a>
              </div>
              <div className="project1">
                <h2 className="title">I DONT CARE YOU PICK APP</h2>
                <p>An app to take the hastle out of finding interesting things to do around town. Find food, events, and adventures quickly and easily even when the weather is not ideal.</p>
                <img src="../assets/images/youpick.jpg"/>
                <a className="live" href="https://youpick.surge.sh">View Live</a>
                <a className="code" href="www.github.com/drake-fish">Code</a>
              </div>
              <div className="project1">
                <h2 className="title">I DONT CARE YOU PICK APP</h2>
                <p>An app to take the hastle out of finding interesting things to do around town. Find food, events, and adventures quickly and easily even when the weather is not ideal.</p>
                <img src="../assets/images/youpick.jpg"/>
                <a className="live" href="https://youpick.surge.sh">View Live</a>
                <a className="code" href="www.github.com/drake-fish">Code</a>
              </div>
            </div>
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
              <p>I am a front-end developer born and raised in Austin Texas. I have an eye for detail and leadership and love to learn new things everyday. When I am not coding and creating, I love to be outdoors exploring with my dog and being in the company of good friends.</p>
              <h3>LETS TALK!</h3>
              <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
            </div>
            <div id="contact">
            <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
            <div className="row">
            <label htmlFor="name">Your name:</label><br />
            <input id="name" className="input" name="name" type="text" size="30" /><br />
            </div>
            <div className="row">
              <label htmlFor="email">Your email:</label><br />
              <input id="email" className="input" name="email" type="text"  size="30" /><br />
            </div>
            <div className="row">
              <label htmlFor="message">Your message:</label><br />
              <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
            </div>
            <input id="submit_button" type="submit" value="Let's Talk" />
          </form>
            </div>
            <div className="contact-bottom">
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="www.twitter.com/drakefishatx" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
    );
  }
});
