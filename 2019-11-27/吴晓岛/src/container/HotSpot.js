import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../index.css';
export default class HotSpot extends Component {
    render() {
        return (
            <div>
                <NavBar
      mode="light"
      icon={<Icon type="left"  />}
      onLeftClick={() => console.log('onLeftClick')}
    >热点排行</NavBar>
    <div>
        <button className="wu_kuang">
           <p className='wu_ziti'>1</p></button>
           <p className='wu_ziti1'>武汉大学  #樱花季</p>
           <p className='wu_ziti2'>3756</p>
           <div className="wu_img">
           <img src={'./images/01.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang1">
           <p className='wu_ziti'>2</p></button>
           <p className='wu_ziti1-1'>厦门大学  #鼓浪屿</p>
           <p className='wu_ziti2-1'>3733</p>
           <div className="wu_img1">
           <img src={'./images/02.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang2">
           <p className='wu_ziti'>3</p></button>
           <p className='wu_ziti1-1'>北京大学  #未名湖</p>
           <p className='wu_ziti2-1'>3656</p>
           <div className="wu_img1">
           <img src={'./images/01.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang3">
           <p className='wu_ziti'>4</p></button>
           <p className='wu_ziti1-1'>中山大学  #逸仙大道</p>
           <p className='wu_ziti3-1'>3633</p>
           <div className="wu_img1">
           <img src={'./images/01.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang3">
           <p className='wu_ziti'>5</p></button>
           <p className='wu_ziti1-1'>清华大学  #水木清华</p>
           <p className='wu_ziti3-1'>3520</p>
           <div className="wu_img1">
           <img src={'./images/01.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang3">
           <p className='wu_ziti'>6</p></button>
           <p className='wu_ziti1-1'>东南大学  #涌泉池</p>
           <p className='wu_ziti2-1'>3427</p>
           <div className="wu_img1">
           <img src={'./images/02.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
    <div>
        <button className="wu_kuang3">
           <p className='wu_ziti'>7</p></button>
           <p className='wu_ziti1-1'>苏州大学  #尊师轩</p>
           <p className='wu_ziti2-1'>3360</p>
           <div className="wu_img1">
           <img src={'./images/02.png'} alt=""/></div>
    </div>
    <hr className="wu_line"/>
            </div>
        )
    }
}
