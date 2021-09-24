import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernm: '',
      email: '',
      phoneno: '',
      passwd: ''
    }
  }
  onuser = (event) => {
    console.log('hih');
    this.setState({ usernm: event.target.value });
  }

  onemail = (event) => {
    console.log('hih');
    this.setState({ email: event.target.value });
  }
  onphoneno = (event) => {
    console.log('hih');
    this.setState({ phoneno: event.target.value });
  }
  onpasswd = (event) => {
    console.log('hih');
    this.setState({ passwd: event.target.value });
  }
submit=()=>{
if(!(this.state.usernm && this.state.usernm.match(/^[a-zA-Z ]*$/))||!(this.state.email)||!(this.state.phoneno && this.state.phoneno.match(/^[0-9]{10}$/))||!(this.state.passwd)){
  alert('plz fill the inputs correctly');
}
  else 
  {
    alert("login successfully");
  }
}
  render() {
    return (
      <div className="App">
        {/* {this.state.usernm} */}
        username:<input type='text' placeholder='username' value={this.state.usernm} onChange={this.onuser} /><br />
        emailid:<input type='email' placeholder='emailid' value={this.state.email} onChange={this.onemail} /><br />
        phonenumber:<input type='text' placeholder='phonenumber' value={this.state.phoneno} onChange={this.onphoneno} /><br />
        password:<input type='password' placeholder='password' value={this.state.passwd} onChange={this.onpasswd} /><br />
        <button onClick={this.submit}>sign-in</button>
      </div>
    );
  }
}

export default App;
