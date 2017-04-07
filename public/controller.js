var DemoReact = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="backgroundYellow">ReactJs with component</h1>
        <h1 className="backgroundYellow">Demo component</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <DemoReact />
    <DemoReact />
  </div>
  ,document.getElementById("root"));
