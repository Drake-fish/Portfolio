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

        <img className="about-photo" src="../assets/images/about-photo.png"/>
        <div className="about-text">
          <h2 className="about-title">My Story</h2>
          <p>As a recent graduate from The Iron Yard coding school I have spent the last 12 weeks exploring and strengthening my passion and skills for front-end development. I have a strong background in management for which I pride myself on leadership and the ability to create positive cultures in the workplace. I love to learn and create new things everyday to stay ahead of the game in the ever-changing world of technology. Also, when I am not coding I enjoy being outdoors exploring with my dog and being in the company of good friends. <a href="https://medium.com/@drakefish" target="_blank">Learn More</a></p>
          <h3 onClick={this.addContact}>LETS TALK!</h3>
        </div>
      </div>
    );
    if(this.state.contact){
      aboutDiv=(
      <div className="about">
        <h2 className="about-top">My Story</h2>
        <img className="about-photo" src="../assets/images/about-photo.png"/>
        <p>As a recent graduate from The Iron Yard coding school I have spent the last 12 weeks exploring and strengthening my passion and skills for front-end development. I have a strong background in management for which I pride myself on leadership and the ability to create positive cultures in the workplace. I love to learn and create new things everyday to stay ahead of the game in the ever-changing world of technology. Also, when I am not coding I enjoy being outdoors exploring with my dog and being in the company of good friends. <a href="https://medium.com/@drakefish" target="_blank">Learn More</a></p>
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
