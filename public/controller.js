var DemoReact = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="backgroundYellow">Props in reactJs</h1>
        <h1 className="backgroundYellow">{this.props.name} - {this.props.professor} </h1>
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
    <DemoReact name="ReactJs" professor="Alex"/>
    <DemoReact name="NodeJs" professor="Kozomi"/>
  </div>
  ,document.getElementById("root"));
