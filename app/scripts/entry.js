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


import $ from 'jquery'
import OAuth from './OAuth'

let auth = {
  consumerKey : "0iCq3aY8yKpaVvy2Q1dyMA",
  consumerSecret : "fuJuRW9AgLOuVM6CLBEg99ul2Xc",
  accessToken : "XEbcfGwJaCSPoLDlh4GTIIcyQMqfMTcv",
  accessTokenSecret : "-TeMkRuRd99_PRMGAEq9B4WDVnU",
  serviceProvider : {
      signatureMethod : "HMAC-SHA1"
  }
}

let terms = 'dog parks'
let near = 'Austin'

let accessor = {
    consumerSecret : auth.consumerSecret,
    tokenSecret : auth.accessTokenSecret
}

let parameters = []
parameters.push(['term', terms])
parameters.push(['location', near])
parameters.push(['callback', 'cb'])
parameters.push(['oauth_consumer_key', auth.consumerKey])
parameters.push(['oauth_consumer_secret', auth.consumerSecret])
parameters.push(['oauth_token', auth.accessToken])
parameters.push(['oauth_signature_method', 'HMAC-SHA1'])

let message = {
    'action' : 'https://api.yelp.com/v2/search',
    'method' : 'GET',
    'parameters' : parameters
}

OAuth.setTimestampAndNonce(message)
OAuth.SignatureMethod.sign(message, accessor)

let parameterMap = OAuth.getParameterMap(message.parameters)

$.ajax({
    'url' : message.action,
    'data' : parameterMap,
    'dataType' : 'jsonp',
    'jsonpCallback' : 'cb',
    'cache': true
})
.then(function(data) {
  console.log('EVERYTHING IS AWESOME!: ', data);
})
.fail(function(e) {
  console.error('BOOH!: ', e)
})
