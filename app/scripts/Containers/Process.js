import React from 'react';
import {Link} from 'react-router';
import Carousel from '../Components/Carousel';
export default React.createClass({

  render(){
    return(
      <div className="you-pick">
        <div className="header">
          <h2 className="home-link"><Link to="/">Drake Fish</Link></h2>
        </div>
        <h1>I DON'T CARE YOU PICK</h1>
        <Carousel/>
        <h3><a href="https://www.github.com/drake-fish/you-pick" target="_blank">GitHub</a></h3>
        <h3><a href="https://youpick.surge.sh" target="_blank">View Live</a></h3>
        <p>The I Don't Care You Pick App was built to solve one simple problem, what should I do today? I built this app using React components, Backbone Models and collections and 5 API's (Dark Sky Weather, Google Maps, Yelp, Eventful, and Backendless) to bring all the data to life. My favorite part about building this app was being able to make it my own. My code, my design, my ideas brought to life. It's a magical feeling seeing everything come together piece by piece and tackling a new challenge everyday.</p>
        <h2>Highlights</h2>
        <ul>
          <li className="highlights">Thousands of restaurants, events, and adventures</li>
          <li className="highlights">Save your favorite searches for later</li>
          <li className="highlights">Customize your preferences to make it your own</li>
          <li className="highlights">Easy to use User Interface</li>
          <li className="highlights">Find adventures based on the live weather</li>
          <li className="highlights">Search anything you want around your location</li>
        </ul>
        <h2>Challenges</h2>
          <p className="challenges">There were many challenges associated with building this app. I feel my greatest opprotunity and accomplishment with this app was navigating the 5 different API's to get the data to work together.  Using Backendless as a BaaS was also a challenge because of the relational data that needed to be saved on each user. </p>
          <div className="contact-bottom">
            <a href="https://www.twitter.com/drakeatx" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
            <a href="https://www.linkedin.com/in/drake-fish-94a46694" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Linked-in</span></a>
            <a href="https://www.github.com/drake-fish" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span>GitHub</span></a>
          </div>
      </div>
    );
  }
});
