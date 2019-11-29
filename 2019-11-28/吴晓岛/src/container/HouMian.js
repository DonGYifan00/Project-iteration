import React, { Component } from 'react'
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import '../index.css';
export default class HouMian extends Component {
    render() {
        return (
            <div className="wu_img01">
                <button class='wu_button'>
                    <img style={{width:'5vw',marginTop:'0.3em'}} src={'../images/guanli.png'} alt=""/>
                    <p className="wu_p2">用户管理</p>
                    {/* <Route path='/home' component={Home}/> */}
                </button>
                </div>
            
        )
    }
}
