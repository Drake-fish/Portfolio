import React from 'react';
import Contact from './Contact';

export default React.createClass({
  getInitialState(){
    return{
      contact:false
    }
  },
  render(){
    let aboutDiv=(
      <div className="about">
        <h2>ABOUT</h2>
        <img className="about-photo" src="../assets/images/about-photo.png"/>
        <p>I am a front-end developer born and raised in Austin, Texas. As a recent graduate from the Iron Yard coding school I have spent the last 12 weeks sharpening coding skills. With a background in management I pride myself on leadership and managing my time to beat deadlines. I love to learn and create new things everyday, and when I am not coding, I love to be outdoors exploring with my dog and being in the company of good friends.</p>
        <h3 onClick={this.addContact}>LETS TALK!</h3>
      </div>
    );
    if(this.state.contact){
      aboutDiv=(
      <div className="about">
        <h2 className="about-top">ABOUT</h2>
        <img className="about-photo" src="../assets/images/about-photo.png"/>
        <p>As a recent graduate from the Iron Yard coding school I have spent the last 12 weeks sharpening my coding skills. I have a strong background in management and I pride myself on leadership and managing my time to beat deadlines. I love to learn and create new things everyday, and when I am not coding, I love to be outdoors exploring with my dog and being in the company of good friends. <a href="www.medium.com" target="_blank">Learn More</a></p>
        <h3>LETS TALK!</h3>
        <div className="contact-div">
          <Contact/>
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeMenu}></i>
        </div>
      </div>
    );
    }
    return(
      <div id="about">
        {aboutDiv}
      </div>
    );
  },
  addContact(){
    this.setState({contact:true});
  },
  closeMenu(){
    this.setState({contact:false});
  }
});
