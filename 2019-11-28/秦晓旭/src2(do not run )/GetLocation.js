// import React, { Component } from 'react'
// // import '../styles/components/GetLocation.css'
// const AMap = window.AMap
// const AMapUI = window.AMapUI
// //思路进入页面时先定位
// //可以通过搜索选址
// //可以通过拖拽微调选址
// class GetLocation extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectionCenter: []
//     }
//   }
//   componentWillMount() {}
//   componentDidMount = () => {
//     this.getLocation()
//     this.searchSiteSelection()
//   }
//   // 12,[116.171731,40.06682]
//   //获取当前定位
//   getLocation = () => {
//     /***************************************
//           由于Chrome、IOS10等已不再支持非安全域的浏览器定位请求，为保证定位成功率和精度，请尽快升级您的站点到HTTPS。
//          ***************************************/
//     let map, geolocation
//     //加载地图，调用浏览器定位服务
//     map = new AMap.Map('container', {
//       resizeEnable: true
//     })
//     map.plugin('AMap.Geolocation', () => {
//       geolocation = new AMap.Geolocation({
//         enableHighAccuracy: true, //是否使用高精度定位，默认:true
//         timeout: 10000, //超过10秒后停止定位，默认：无穷大
//         buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
//         zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//         buttonPosition: 'RB'
//       })
//       map.addControl(geolocation)
//       geolocation.getCurrentPosition()
//       AMap.event.addListener(geolocation, 'complete', onComplete.bind(this)) //返回定位信息
//       AMap.event.addListener(geolocation, 'error', onError) //返回定位出错信息
//     })
//     //解析定位结果
//     function onComplete(data) {
//       let poi = data.position.toString().split(',')
//       // 需要通过改变this指向
//       this.dragSiteSelection(15, poi)
//     }
//     //解析定位错误信息
//     function onError(data) {
//       alert('定位失败')
//     }
//   }
//   //通过搜索来获取定位信息
//   searchSiteSelection = () => {
//     AMapUI.loadUI(['misc/PoiPicker'], PoiPicker => {
//       let poiPicker = new PoiPicker({
//         input: 'pickerInput'
//       })
//       //初始化poiPicker
//       window.poiPicker = poiPicker
//       //选取了某个POI
//       poiPicker.on('poiPicked', poiResult => {
//         let poi = poiResult.item.location.toString().split(',')
//         this.dragSiteSelection(15, poi)
//       })
//     })
//   }

//   //拖拽位置选择
//   dragSiteSelection = (zoom, center) => {
//     AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
//       let map = new AMap.Map('container', {
//         zoom: zoom,
//         resizeEnable: true,
//         center: center
//       })
//       let positionPicker = new PositionPicker({
//         mode: 'dragMap', //设定为拖拽地图模式，可选'dragMap[拖拽地图]'、'dragMarker[拖拽点]'，默认为'dragMap'
//         map: map
//         // iconStyle: { //自定义图标外观
//         //     url: '//webapi.amap.com/ui/1.0/assets/position-picker2.png', //图片地址
//         //     ancher: [24, 40], //要显示的点大小，将缩放图片
//         //     size: [48, 48]    //锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
//         // }
//       })
//       positionPicker.on('success', positionResult => {
//         let locationMsg = {
//           lng: positionResult.position.lng, // 经度
//           lat: positionResult.position.lat, // 维度
//           address: positionResult.address, // 详细地址
//           nearestJunction: positionResult.nearestJunction, // 最近的路口
//           nearestRoad: positionResult.nearestRoad, // 最近的路
//           nearestPOI: positionResult.nearestPOI // 最近的POI
//         }
//         //将数据抛出
//         this.props.getLocationMsg(locationMsg)
//       })
//       positionPicker.on('fail', positionResult => {
//         // 海上或海外无法获得地址信息
//         alert('选址失败请稍后重试')
//       })
//       positionPicker.start()
//     })
//   }
//   render() {
//     return (
//       <div id="GetLocation">
//         <input id="pickerInput" placeholder="输入关键字选取地点" />
//         <div id="container" className="map"></div>
//       </div>
//     )
//   }
// }

// export default GetLocation



// Amap


import React,{Component} from 'react';
import {Map,Marker} from 'react-amap';
import $http from '../basic/http';
import sellerImg from '../images/sellerPos.png';
import myImg from '../images/myPos.png';
import REQUESTURL from '../basic/request';
import Geolocation from 'react-amap-plugin-geolocation';
const AMap = window.AMap
const AMapUI = window.AMapUI

export default class GetLocation extends Component {
    state = {
        zoom:13.5,
        position:[0,0],
        dragEnable:true,
        zoomEnable:true,
        shopOne:{
            latitude:0,
            longitude:0,
        }
    };
    constructor(){
        super();
    }
    componentDidMount(){

    const shopId = this.props.match.params.shopId;
    $http.post(REQUESTURL.shopInfo,{id:shopId})
        .then((res)=>{
            this.setState({shopOne:res.data})
        })
        .catch(()=>{
            console.log('error')
        })
}
render () {
    let pos = [this.state.shopOne.longitude,this.state.shopOne.latitude];
    let styleC = {
      background:`url(${sellerImg})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '70px',
      height: '60px',
    };
    let styleD = {
        background:`url(${myImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '70px',
        height: '60px',
    };
    let that = this;
    const plugins = [
      'Scale',
      {
        name:'ToolBar',
        options:{
            visible: true,  // 不设置该属性默认就是 true
            onCreated(ins) {},
        },
      }
    ];
    let onComplete=(data)=>{
        that.setState({
            position:[data.position.getLng(),data.position.getLat()]
        })
    };
    let onError = ()=>{
        alert('定位失败');
        // that.setState({
        //     position:[112.58032,37.857965]
        // })
    };
    const events = {
        created: (instance) => {
            instance.plugin('AMap.Geolocation', function () {
                let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(14, 130),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                instance.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
            });
        }
    };
    // AMap
    let selfPos = null;
    if(this.state.position[0]){
        selfPos = (<Marker position={this.state.position}><div style={styleD}></div></Marker>);
    }
    return(
        <div style={{position:'absolute',width: '100%', height: '100%'}}>
            <Map events={events}  amapkey={'faf3aff253e8971ec0d8e040d8c0f609'} plugins={plugins} center={pos} zoom={this.state.zoom} dragEnable={this.state.dragEnable} zoomEnable={this.state.zoomEnable}>
                {selfPos}
                <Marker position={pos}><div style={styleC}></div></Marker>
            </Map>
        </div>
    )
}
}


