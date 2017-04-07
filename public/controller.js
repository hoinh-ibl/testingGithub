function getName(name){
  alert(name);
}
var DemoReact = React.createClass({
  addStudent(){
    this.state.totalAttendent = parseInt(this.state.totalAttendent) +1;
    this.setState(this.state);
  },
  getInfo(){
    alert(this.props.children);
  },
  getInitialState(){
    return{totalAttendent: this.props.totalAttendent};
  },
  render: function(){
    return(
      <div>
        <h1>State in the reactJs session 2</h1>
        <h1 className="backgroundYellow">{this.props.name} - {this.props.professor} </h1>
        <div>so hoc vien:{this.state.totalAttendent}</div>
        <p>{this.props.children}</p>
        <button onClick={()=>{var str = this.props.name + " " + this.props.professor; getName(str)}}>info name professor</button>
        <button onClick={this.addStudent}>info student</button>
        <Course />
      </div>
    );
  }
});

var Course = React.createClass({
  render: function(){
    return(
        <h3>React programming</h3>
    );

  }
});

ReactDOM.render(
  <div>
    <DemoReact name="ReactJs" professor="Alex" totalAttendent="10"> the course ReactJs</DemoReact>
    <hr/>
    <DemoReact name="NodeJs" professor="Kozomi" totalAttendent="20"> the course NodeJs</DemoReact>
  </div>
  ,document.getElementById("root"));
