var Component = React.createClass({
  add(){
    this.setState({num: parseInt(this.state.num) + 1});
  },
  getInitialState(){
    return{num: 0}
  },
  render(){
    return(
      <button onClick={this.add}>Hey {this.state.num}</button>
    );
  }
});
ReactDOM.render(
  <Component/>
  ,document.getElementById("root")
);
