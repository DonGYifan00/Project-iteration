import React, { Component, Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '../../index.css';
import Reason from './Reason.js';
import Resultfirst from './Resultfirst.js';
import Resultsecond from './Resultsecond.js';

export default class Reserve extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render() {
        return (
            <Fragment>
                {/* 上半部分搜索学校 */}
                <div className='qin_back' id='qin_reserve'>
                    <div className='iconfont icon-fanhui' id='qin_fanhui'></div>
                    <input placeholder='&nbsp;请输入想预约的高校' ref={ref => this.autoFocusInst = ref} />
                </div>
                <Reason />
                <Resultfirst />
                <Resultsecond />

                
            </Fragment>
        )
    }
}
