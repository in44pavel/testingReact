document.write("test")

/*const JSX=<div>try JSX</div>
ReactDOM.render(
  JSX,
  document.getElementById('p1')*/

  class Set extends React.Component {
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'class'
        )
      );
    }
  }
  ReactDOM.render(React.createElement(Set, null), document.getElementById('p1'));

/*const e = React.createElement;
class Test extends React.Component {
  render(){
    return(
      <div>
      Testing react
      </div>
    )
  }
}

ReactDOM.render(
  <Test /> ,
  document.getElementById('react')
)/**/
