// const http = require("http");
var express = require("express");
var app = express();
var mysql = require("mysql");
var dbconfig = require("../DBconfig/dbconfig.json");
var bodyParser = require("body-parser"); //解析POST的body

app.use(bodyParser.json());//使用body parser用于解析post的body
app.use(bodyParser.urlencoded({ extended: true }));//使用body parser用于解析post的body

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static('public'));



app.post('/login',function(req,res){
    /**获取请求体数据 */
    let data = req.body;
    console.log(data.username);
    console.log(data.password);
    let message1 = {success:true};
    let message2 = {success:false};
    /**连接数据库 */
    var con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from users",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    })
    con.query("select * from users where username = '"+ data.username +"' and password = '"+data.password+"'",function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result);
            // eslint-disable-next-line no-cond-assign
            // eslint-disable-next-line eqeqeq
            if(result == false){
                res.send(message2);
            }
            else{
                res.send(message1);
            }
        }
    })


    
    // if(data.username === 'JH' && data.password === '123456'){
    //     res.send(message1);
    // }
    // else{
    //     res.send(message2);
    // }
})

var server = app.listen(8080,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://%s:%s",host,port);
})