import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {'time':this.props.startSeconds}
  }
  componentDidMount(){
    this.countdown = setInterval(()=>this.timeDown(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.countdown);
  }
  timeDown(){
    let time = this.state.time;
    this.setState({'time':time-1})
  }
  render(){
    const time = this.props.timeFormatter(this.state.time)
    return (
        <p>{ time }</p>
      )
  }
}

class App extends React.Component {

  timeFormatter(seconds){
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }
  render(){
    return (
    <div className="App">
      <Clock startSeconds={100} timeFormatter={this.timeFormatter}/>
    </div>
  )
  }
}

export default App;
