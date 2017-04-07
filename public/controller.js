var DemoReact = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="backgroundYellow">Component Nested in reactJs</h1>
        <Course />
      </div>
    );
  }
});

var Course = React.createClass({
  render: function(){
    return(
        <h3>Demo component nested</h3>
    );

  }
});

ReactDOM.render(
  <div>
    <DemoReact />
    <DemoReact />
  </div>
  ,document.getElementById("root"));
