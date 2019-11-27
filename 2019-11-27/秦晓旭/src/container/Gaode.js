// 安装组件  npm install —-save react-amap
// npm install —-save react-amap-plugin-geolocation
import React, { Component } from 'react';
import { Map, Marker, Polygon } from 'react-amap';
/* react-amap */
/**
 * Map：最基本组件，用于显示地图，其他的组件依赖它
 * Marker、Markers组件用于在地图上显示标记点；
 *   react-amap 在高德原生的标记点实例上，
 *   通过一层封装可以很方便的在地图上显示单个或者大批量的标记点；
 *   而且定义外观也极其方便；
 * Polyline和Polygon组件分别用于在地图上绘制折线和多边形；
 * PolyEditor 用于给 Polygon 和 Polyline 组件加上编辑功能；
 * Circle 用于在地图上绘制一个圆形；
 * CircleEditor用于给Circle提供编辑功能；
 * InfoWindow用于在地图上显示信息窗体；
 *   在 react-amap 的封装下，可以直接以JSX语法来写窗体内容，非常方便；
 * GroundImage 用于在地图上的指定区域内显示一个地图。
 */
export default class Gaode extends Component {
    render(){
      const plugins = [
        'MapType',
        'Scale',
        'OverView',
        'ControlBar', // v1.1.0 新增
        {
          name: 'ToolBar',
          options: {
            visible: true,  // 不设置该属性默认就是 true
            onCreated(ins){
              console.log(ins);
            },
          },
        }
      ]
      
      return <div style={{width: '100%', height: '400px'}}>
        <Map
          scrollWheel={true} // 
          plugins={plugins}
          zoom={16}
          scrollWheel={true}
          mapStyle={'fresh'}  
        //   center={[116.397428, 39.90923]}
          viewMode={'3D'}
          amapkey={'d59d9df5c1a91e536b1fedcd52010689'}
       
        />
      </div>
    }
  }

