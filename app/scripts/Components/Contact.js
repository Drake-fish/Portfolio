import React from 'react';
import $ from 'jquery';
export default React.createClass({
  getInitialState(){
    return{
      email:false,
      loading:false
    }
  },
  render(){
    let emailForm=(
      <div className="email-form">
        <h2>Questions</h2>
        <h2>Thoughts</h2>
        <h2>Work</h2>
        <h2>Let's Talk!</h2>
        <form onSubmit={this.handleSubmit}id="contact">
          <input ref="name" placeholder="name" type="text"/>
          <input ref="email" placeholder="email" type="text"/>
          <textarea ref="message" placeholder="Your Message"></textarea>
          <input  type="submit" placeholder="Talk to me"/>
        </form>
      </div>
);
if (this.state.email && !this.state.loading){
  emailForm=(
    <div className="email-form">
    <h2>Questions</h2>
    <h2>Thoughts</h2>
    <h2>Work</h2>
    <h2>Let's Talk!</h2>
      <div className="email-sent">
        <h2><i className="fa fa-check" aria-hidden="true"></i>SUCCESS</h2>
        <h3 className="thankyou">Thanks for your email! I will be in touch with you shortly!</h3>
      </div>
      <form id="contact">
        <input ref="name" placeholder="name" type="text"/>
        <input ref="email" placeholder="email" type="text"/>
        <textarea ref="message" placeholder="Your Message"></textarea>
        <input onClick={this.handleSubmit} type="submit" placeholder="Talk to me"/>

      </form>
    </div>
  );
}else if(!this.state.email && this.state.loading){
  emailForm=(
    <div className="email-form">
      <div className="loading">
      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
      </div>
      <h2>Questions</h2>
      <h2>Concerns</h2>
      <h2>Work</h2>
      <h2>Send me a message</h2>
      <form id="contact">
        <input ref="name" placeholder="name" type="text"/>
        <input ref="email" placeholder="email" type="text"/>
        <textarea ref="message" placeholder="Your Message"></textarea>
        <input type="submit"/>
      </form>
    </div>
  );
}
    return(
      <div>
        {emailForm}
      </div>
    );
},
  handleSubmit(e){
    e.preventDefault();
    this.setState({loading:true});
      $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/messaging/email',
          contentType: 'application/json',
          data: JSON.stringify({
              subject: this.refs.name.value,
              bodyparts:{
                textmessage:this.refs.message.value +' '+ this.refs.email.value
              },
              to:['drake_fish@yahoo.com']
          }),
          success:(response)=>{
            this.setState({email:true,loading:false});
            setTimeout(()=>{
              this.setState({email:false});
            },3000);
            this.refs.name.value='';
            this.refs.email.value='';
            this.refs.message.value='';

          }
      });
    }
});
