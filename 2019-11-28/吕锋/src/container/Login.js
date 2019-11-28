import React from 'react'
import { Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';
const his = createBrowserHistory();

class Login extends React.Component {

constructor(props){
    super(props);
    this.state={
        login:false
    }
}

    doLogin=()=>{
        // let username=document.querySelector("input[type=text]").value;
        // let password=document.querySelector("input[type=password]").value;
        // if(username==="admin"&&password==="123456"){
        //     this.setState({
        //         login :true
        //     })
        // }
        his.push('/home');
    }

    
   
    render() {
        return (
            <div className='lv_login'>
                <div className='lv_login1'>
                    <form onSubmit={this.doLogin} className='lv_login2'>
                        账号：<input type="text" name='users'/><br/>
                        密码：<input type="password" name='password'/><br/>
                        <input type="submit" value="登录"/>
                    </form>
                </div>


                
             
            </div>

        );
    }
}

export default Login;
