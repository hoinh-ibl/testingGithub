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
        <h1>Ref in the reactJs</h1>
        <h1 className="backgroundYellow">{this.props.name} - {this.props.professor} </h1>
        <div>so hoc vien:{this.state.totalAttendent}</div>
        <p>{this.props.children}</p>
        <button onClick={()=>{var str = this.props.name + " " + this.props.professor; getName(str)}}>info professor</button>
        <button onClick={this.addStudent}>info Student</button>
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

var InputTag = React.createClass({
  show(){
    var text = this.refs.selected.value;
    alert(text);
  },
  render(){
    return(
        <div>
          <select ref="selected">
            <option value="a">anpha</option>
            <option value="b">beta</option>
            <option value="g">gamma</option>
          </select>
          <input type="text" ref="txt"></input>
          <button onClick={this.show}>Show  </button>
        </div>
    );
  }
});
ReactDOM.render(
  <div>
    <InputTag/>
    <DemoReact name="ReactJs" professor="Alex" totalAttendent="10"> the course ReactJs</DemoReact>
    <hr/>
    <DemoReact name="NodeJs" professor="Kozomi" totalAttendent="20"> the course NodeJs</DemoReact>
  </div>
  ,document.getElementById("root"));
