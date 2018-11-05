document.write("test")

/*const JSX=<div>try JSX</div>
ReactDOM.render(
  JSX,
  document.getElementById('p1')*/

const e = React.createElement;
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
