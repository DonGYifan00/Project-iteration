import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
    userChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    pwdChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    getConnect=()=>{
        let text = {username:this.state.username,password:this.state.password};
        let send = JSON.stringify(text);  //需要把对象转换成JSON字符串去进行传输
        fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:send
        })
        .then(res=>res.json())
        .then(
            data=>{
                if(data.success){
                    window.alert("登录成功");
                }
                else{
                    window.alert("登录失败");
                }
            }
        )
    }
    render() {
        return (
            <div>
                <input type="text" name="username" className="Login-1" placeholder="请输入用户名" onChange={this.userChange}/>
                <input type="password" name="pwd" className="Login-2" placeholder="请输入密码" onChange={this.pwdChange}/>
                <input type="submit" value="登录验证" className="Login-3" onClick={this.getConnect}/>
            </div>
        )
    }
}
