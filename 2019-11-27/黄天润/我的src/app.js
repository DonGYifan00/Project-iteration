import React, { Component } from 'react'
import AppTab from './container/AppTab'
import Favorites from './container/Favorites'
import Follow from './container/Follow'
import User from './container/User'

export default class Request extends Component {
    render() {
        return (
            <div>
                {/* <User/> */}
                <AppTab/>
                {/* <Favorites/> */}
                {/* <Follow/> */}
            </div>
        )
    }
}
