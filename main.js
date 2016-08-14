(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEdBQVIsQ0FBWSxNQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG4vL1xuLy8gY29uc3QgQ2hlY2tCb3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4vLyAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbi8vICAgICByZXR1cm4ge2NoZWNrZWQ6IGZhbHNlfVxuLy8gICB9LFxuLy8gICBjbGlja0hhbmRsZXIoZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGUud2hpY2gpO1xuLy8gICAgIGlmICghZS53aGljaCB8fCBlLndoaWNoID09PSAxMykge1xuLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZH0pXG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGxldCBjaGVja2VyO1xuLy8gICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrZWQpIHtcbi8vICAgICAgIGNoZWNrZXIgPSAoPGRpdiBjbGFzc05hbWU9XCJjaGVja2VyXCI+PC9kaXY+KVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja2JveFwiPkNoZWNrIG1lPC9sYWJlbD5cbi8vICAgICAgICAgPGRpdiByb2xlPVwiY2hlY2tib3hcIiB0YWJJbmRleD1cIjBcIiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn0gb25LZXlVcD17dGhpcy5jbGlja0hhbmRsZXJ9IGlkPVwiY2hlY2tib3hcIiBhcmlhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0+XG4vLyAgICAgICAgICAge2NoZWNrZXJ9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vL1xuLy8gICAgIClcbi8vICAgfVxuLy8gfSlcbi8vXG4vLyBSZWFjdERPTS5yZW5kZXIoKDxDaGVja0JveC8+KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKVxuY29uc29sZS5sb2coJ3Rlc3QnKTtcbiJdfQ==
