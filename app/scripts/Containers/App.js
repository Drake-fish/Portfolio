import React from 'react';
import Nav from '../Components/nav';

export default React.createClass({

render(){
  return(
    <div id="app">
        {this.props.children}
    </div>
  );

}
});
