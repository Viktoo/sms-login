import React from 'react';
import './LoginEntry.css'

class loginEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A Shopify store address was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
     <div>
     <img 
      className='infoIcon' 
      src={require('../../assets/SMSWebInfoIcon.png')} 
      onMouseEnter={this.handleMouseHover}
      onMouseLeave={this.handleMouseHover}
      />
    	<form onSubmit={this.handleSubmit}>
        <input className='form' type="text" placeholder="your-store-name" value={this.state.value} onChange={this.handleChange} />
    	</form>
      {
        this.state.isHovering &&
        <div className='infoMessage'>
          <span className='emoji'>🐣</span>
          <br/>
          Don't know your Shopify store name? 
          <br/>
          Log into your Shopify Admin panel first. 
        </div>
      }
    	<button className='button' onClick={this.handleSubmit}>
  			<div>
  				<p className='loginText'>Sign In</p>
  			</div>
	    </button>
     </div>
    );
  }
}

export default loginEntry;
