import React from 'react';
import { TabBar } from 'antd-mobile';
import HotSpot from './HotSpot';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        
          <TabBar.Item
  
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <HotSpot/>
          </TabBar.Item>
          
    
      </div>
    );
  }
}