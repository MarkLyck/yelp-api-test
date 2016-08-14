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

import Yelp from 'yelp'

var yelp = new Yelp({
  consumer_key: '0iCq3aY8yKpaVvy2Q1dyMA',
  consumer_secret: 'fuJuRW9AgLOuVM6CLBEg99ul2Xc',
  token: 'XEbcfGwJaCSPoLDlh4GTIIcyQMqfMTcv',
  token_secret: '	-TeMkRuRd99_PRMGAEq9B4WDVnU'
});

yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log('data: ', data);
})
.catch(function (err) {
  console.error('err: ', err);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business('yelp-san-francisco')
  .then(console.log)
  .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
  .then(console.log)
  .catch(console.error);

// A callback based API is also available:
yelp.business('yelp-san-francisco', function(err, data) {
  if (err) return console.log(error);
  console.log(data);
});


console.log('testing yelp');
