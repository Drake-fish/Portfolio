import React from 'react';
import {Link} from 'react-router';
import Contact from './Contact';
export default React.createClass({
  getInitialState(){
    return{
      menu:false,
      contact:false
    };
  },
  render(){
    let nav= <i className="fa fa-bars" aria-hidden="true" onClick={this.handleMenu}></i>
    if(this.state.menu){
      nav=(
        <nav>
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeMenu}></i>
          <a onClick={this.closeMenu} href="/"><li>Home</li></a>
          <a onClick={this.closeMenu}  href="#portfolio"><li>Portfolio</li></a>
          <a onClick={this.closeMenu}  href="#about"><li>About</li></a>
          <a onClick={this.openContact}  href="#contact"><li>Contact</li></a>
        </nav>
      );
    }
    if(this.state.contact){
      nav=(
        <div>
          <i id="close" className="fa fa-times" aria-hidden="true" onClick={this.closeContact}></i>
          <Contact/>
        </div>
      );
    }
    return(<div className="nav">
            {nav}
          </div>
    );
  },
  handleMenu(){
    this.setState({
      menu:true
    });
  },
  closeMenu(){
    this.setState({
      menu:false
    });
  },
  openContact(){
    this.setState({
      contact:true
    });
  },
  closeContact(){
    this.setState({
      contact:false,
      menu:false
    });
  }
});
