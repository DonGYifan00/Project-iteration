import React, { Component } from 'react'
import { Map, Marker, Polygon } from 'react-amap';

import GetLocation from  './GetLocation'
import EditAddress from  './EditAddress'
export default class App extends Component {
  render() {
    return (
      <div>
        <GetLocation />
      </div> 
    )
  }
}