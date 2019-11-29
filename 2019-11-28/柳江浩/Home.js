import React, { Component, Fragment } from 'react'
import { SearchBar, Carousel, Flex, WhiteSpace } from 'antd-mobile';
import { Map, Marker, Polygon } from 'react-amap';

export default class Home extends Component {
    // Carousel
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2'],
            });
        }, 100);
    }

    render() {
        const plugins = [
            // 'MapType',
            'Scale',/**比例尺 */
            'OverView',
            'ControlBar', // v1.1.0 新增  定位到当前位置
            {
                name: 'ToolBar',
                options: {
                    visible: true,  // 不设置该属性默认就是 true
                    onCreated(ins) {
                        console.log(ins);
                    },
                },
            }
        ]
        return (
            <Fragment>
                {/* 顶部搜索栏 */}
                <div style={{ width: '100%', height: '14.2vw', backgroundColor: 'rgb(139, 139, 139)' }}>
                    <i className='iconfont icon-dingwei' id='qin_dingwei'></i>
                    <p className='qin_city'>石家庄</p>
                    <SearchBar placeholder="请输入大学名称" maxLength={15} />
                </div>

                {/* Carousel */}
                <div style={{ border: '0.2vw rgba(0,0,0,0) solid' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    >

{/* https://imgchr.com/i/QPXZNt
https://imgchr.com/i/QPXe4P */}
                        {this.state.data.map(val => (
                            <img src={require(`../images/qCarousel${val}.jpg`)}
                                alt=""
                                style={{ width: '100%', height: '60vw', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                </div>

                {/* 中间四个入口 */}
                <div className='qin_rukou'>
                    <Flex>
                        <Flex.Item>
                            <div>
                                <img src={require('../images/qrukou1.png')} />
                                <p>使用帮助</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <img src={require('../images/qrukou2.png')} />
                                <p>名校预约</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <img src={require('../images/qrukou3.png')} />
                                <p>精确地图</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <img src={require('../images/qrukou4.png')} />
                                <p>热点排行</p>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>

                {/* 地图 */}
                <div className='qin_map'>
                    <div style={{ width: '100%', height: '80vw' }}>
                        <Map
                            scrollWheel={true} // 不起作用
                            plugins={plugins}
                            zoom={17}
                            mapStyle={'fresh'}
                            center={[114.517366,37.994022]}
                            viewMode={'3D'}
                            amapkey={'d59d9df5c1a91e536b1fedcd52010689'}
                        />
                    </div>
                </div>

                {/* 周边热门高校 */}
                <div className='qin_hot'>
                    <p className='qin_title'>周边热门高校</p>
                </div>
            </Fragment>
        )
    }
}
