// import React from 'react'
// import ReactDOM from 'react-dom'
//
// const CheckBox = React.createClass({
//   getInitialState() {
//     return {checked: false}
//   },
//   clickHandler(e) {
//     console.log(e.which);
//     if (!e.which || e.which === 13) {
//       this.setState({checked: !this.state.checked})
//     }
//   },
//   render: function() {
//     let checker;
//     if (this.state.checked) {
//       checker = (<div className="checker"></div>)
//     }
//     return (
//       <div>
//         <label htmlFor="checkbox">Check me</label>
//         <div role="checkbox" tabIndex="0" onClick={this.clickHandler} onKeyUp={this.clickHandler} id="checkbox" aria-checked={this.state.checked}>
//           {checker}
//         </div>
//       </div>
//
//     )
//   }
// })
//
// ReactDOM.render((<CheckBox/>), document.getElementById('container'))
console.log('test');
