import React, { Component } from 'react'


import '../index.css'

export default class HouTai extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
        }
        componentWillMount() {
        this.timer = setInterval(() => { this.setState({ date: new Date() }) }, 1000);
        }
        componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
        }
    render() {
        
        let t = this.state.date;
        let year = t.getFullYear();
        let month = t.getMonth() + 1;
        let day = t.getDay()+24;
        let hour = ((t.getHours() < 10) ? "0" : "") + t.getHours();
        let minutes = ((t.getMinutes() < 10) ? "0" : "") + t.getMinutes();
        let seconds = ((t.getSeconds() < 10) ? "0" : "") + t.getSeconds();
        let ifnoon = ' ' + ((t.getHours() < 12) ? "上午" : "下午") + ' ';
        return (
          <div>
          <div class="wu_box">
        
          <img style={{width:'2.5vw',marginTop:'0.3em',marginLeft:'0.2em',position:'absolute'}} src={"../images/yonghu.png"} alt=""/>
          <p class="wu_p">欢迎您，xxxx</p>
          <div class="wu_time" id="nowtime">
          <span className="date">{year + '/' + month + '/' + day + ifnoon + hour + ':' + minutes + ':' + seconds}</span></div>
          {/* <p style={{float:'left',marginLeft:'47em',marginTop:'0.25em',fontSize:'10px'}}>{new Date().toLocaleString()}</p> */}
          <u class="wu_p1">退出</u>
          <img style={{float:'right',width:'2vw',marginRight:'1.4em',marginTop:'0.7em'}} src={"../images/fanhui.png"} alt=" "/>
      </div>
      <div class="wu_box1">
          <div>
          <button style={{width:'8.23em',height:'4em'}}>
              <img style={{width:'7.1vw',float:'left',marginTop:'-0.18em',marginLeft:'-0.53em'}} src={'../images/tu_1.png'} alt=""/>
      </button>
      </div>
      </div>
      </div>
        )
    }
}
