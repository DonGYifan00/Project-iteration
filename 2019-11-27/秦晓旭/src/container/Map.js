import React, { Component, Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '../index.css';

export default class Map extends Component {
    componentDidMount() {
        this.autoFocusInst.focus();
    } 
    render() {
        return (
            <Fragment>
                {/* 上半部分搜索学校 */}
                <div className='qin_back'>
                    <div className='iconfont icon-fanhui' id='qin_fanhui'></div>
                    <input placeholder='&nbsp;清华大学' ref={ref => this.autoFocusInst = ref} />
                </div>

                {/* 下半部分地图 */}
                <div>
                    <Tabs tabs={[{ title: '校内精确地点' }, { title: '我的位置' }]} initialPage={0} animated={false} useOnPan={false}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vw', backgroundColor: '#fff' }}>
                            Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '115vw', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                    </Tabs>
                </div>
            </Fragment>
        )
    }
}
