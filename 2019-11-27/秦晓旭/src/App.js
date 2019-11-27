import React, { Component } from 'react';
import Map from './container/Map.js';
import Home from './container/Home.js';
import Gaode from './container/Gaode.js';
import Reserve from './container/reserve/Reserve.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Reserve />
      </div> 
    )
  }
}


// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       longitude:'1',//经度
//       latitude:'2',//纬度
//     }
//   }

//   componentDidMount() {
//     fetch('https://restapi.amap.com/v3/ip?output=xml&key=34f09fa07ef8121f40f0ba669947d891')
//       .then(res => res.text())         
//       .then(text => {
//         text=text.match(/<rectangle>(\S*)<\/rectangle>/)[1];
//         var arr = text.split(';').join(',').split(',');
//         for(var i = 0; i<4; i++){
//           arr[i] = Number(arr[i]);
//         }
//         console.log(arr);
//         var jingdu = ((arr[0] + arr[2])/2).toFixed(8);
//         var weidudu = ((arr[1] + arr[3])/2).toFixed(8);
//         this.setState({
//           longitude:jingdu,
//           latitude:weidudu
//         })
//       })  

//   }

//   render() {
//     return (
//       <div >
//         <div>经度：{this.state.longitude}</div>
//         <div>纬度：{this.state.latitude}</div>
//         <div>当前位置：{this.state.position}</div>
//         <div>data：{this.state.data}</div>
//       </div>
//     );
//   }
// }