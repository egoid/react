import React from "react";
import ReactDOM from "react-dom";

import ReasonsWhyWeLikeReact from "./ReasonsWhyWeLikeReact";


// class Timer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { remainingSeconds: this.props.startSeconds , upSeconds: 0 };
//   }
//   componentDidMount() {
//     let delta = -1;
//     setInterval(() => {
//       if (this.state.remainingSeconds === 0 || this.state.remainingSeconds === this.props.startingSeconds ) {
//         delta = -1 * delta;
//       }
//       this.setState({ remainingSeconds: this.state.remainingSeconds + delta})
//     }, 1000);
//   }
//   render() {
//     return (
      
//         <div> {this.state.remainingSeconds} </div>
//     );
//   }
// }
class App extends React.Component {
  render() {
    let data2 = [
       {"rank":1,"name":"China","population":1373420000,"percent":18.9},
       {"rank":2,"name":"India","population":1280670000,"percent":17.6},
       {"rank":3,"name":"United States","population":322317000,"percent":4.42},
       {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
       {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}
    ];
    let data1 = [
      {"domain":"mongodb.info","ip":"82.192.74.35","country":"NL"},
      {"domain":"udemy.com","ip":"190.93.242.22","country":"CR"},  
      {"domain":"coursereport.com","ip":"204.236.232.83","country":"US"}
    ];
    let titles = [];
    let rows = [];
    if (this.props.data === 'data1') {
      for (var key in data1[0]) {
        titles.push(<td>{key}</td>)
      }
      rows = data1.map(function(row) {
        let cells = [];
        for (var i in row) {
          cells.push(<td>{row[i]}</td>);
        }
        return <tr>{cells}</tr>;
      });
    }
    if (this.props.data === 'data2') {
      for (var key in data2[0]) {
        titles.push(<td>{key}</td>)
      }
      rows = data2.map(function(row) {
        let cells = [];
        for (var i in row) {
          cells.push(<td>{row[i]}</td>);
        }
        return <tr>{cells}</tr>;
      });
    }
    return (
      <table>
        <thead>
          <tr> {titles} </tr>
        </thead>
        <tbody> {rows}
        </tbody>
      </table>
    );
  }
}
ReactDOM.render(<App data="data2" />, document.getElementById('react'));
