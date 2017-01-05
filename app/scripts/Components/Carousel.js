import React from 'react';

export default React.createClass({
  getInitialState(){
    return{
      index:0
    }
  },
    render(){
      let image;
      if(this.state.index===0){
        image=(<img src="../assets/images/youpick4.jpg"/>);
      }else if(this.state.index===1){
        image=(<img src="../assets/images/youpick5.jpg"/>);
      }else if(this.state.index===2){
        image=(<img src="../assets/images/youpick.jpg"/>);
      }else if(this.state.index===3){
        image=(<img src="../assets/images/process4.png"/>);
      }
      return(
          <div className="image">
            <i onClick={this.increaseIndex} className="fa fa-arrow-right" aria-hidden="true"></i>
            <i onClick={this.decreaseIndex} className="fa fa-arrow-left" aria-hidden="true"></i>
            {image}
          </div>
      );
    },
    increaseIndex(){
      console.log(this.state.index);
      if(this.state.index<3){
        this.setState({index:this.state.index+1});
      }else{
        this.setState({index:0});
      }

    },
    decreaseIndex(){
      console.log(this.state.index);
      if(this.state.index===0){
        this.setState({index:3});
      }else{
        this.setState({index:this.state.index-1});
      }
    }
});
