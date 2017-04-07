function getName(name){
  alert(name);
}
var DemoReact = React.createClass({
  getInfo(){
    alert(this.props.children);
  },
  render: function(){
    return(
      <div>
        <h1>Event handler in reactJs session 1</h1>
        <h1 className="backgroundYellow">{this.props.name} - {this.props.professor} </h1>
        <p>{this.props.children}</p>
        <button onClick={()=>{var str = this.props.name + " " + this.props.professor; getName(str)}}>info</button>
        <Course />
      </div>
    );
  }
});

var Course = React.createClass({
  render: function(){
    return(
        <h3>Course programming</h3>
    );

  }
});

ReactDOM.render(
  <div>
    <DemoReact name="ReactJs" professor="Alex"> the course ReactJs</DemoReact>
    <DemoReact name="NodeJs" professor="Kozomi"> the course NodeJs</DemoReact>
  </div>
  ,document.getElementById("root"));
