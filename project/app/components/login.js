import React, { Component } from 'react'
import { View,Text,Button,TextInput,Image } from 'react-native'

export default class LoginComponent extends Component{
    constructor() { 
        super()
        this.state = {
            uname: '',
            upwd:''
        }
    }
    handleChangeUname = (uname) => {
        this.setState({uname:uname})
    }
    handleChangeUpwd = (upwd) => { 
        this.setState({
            upwd:upwd
        })
    }
    handlePress = () => { 
        var uname = this.state.uname
        var upwd = this.state.upwd

        var formData = { uname: uname, upwd: upwd }     //对象，如果是formData = 'uname='+uname+'&upwd='+upwd,发送头headers:{'Content-Type',
        //'application/x-www-form-urlencoded'}，服务器需要引入bodyparser中间件解析数据
        var url = 'http://176.52.12.5:8080/user/login'
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'  //对应下面的JSON.stringify
            },
            body: JSON.stringify(formData)  //使用JSON.stringify转化数据，服务端不需要引入bodyparser组件解析数据
        })
            .then((response) => response.json())
            .then((result) => { 
                console.log(result)
                if (result.code == 200) {
                    this.props.navigation.navigate('main')
                } else { 
                    this.setState({uname:''})
                    this.setState({
                        upwd: ''
                    })
                }
            })
    }
    render(){ 
        return <View>
            <Image style={{ width: 80, height: 80, borderRadius:40,alignSelf:"center" }} source={require('../imgs/3.jpg')}></Image>
            <TextInput onChangeText={this.handleChangeUname} placeholder='请输入用户名' value={this.state.uname}></TextInput>
            <TextInput onChangeText={this.handleChangeUpwd} placeholder='请输入密码' secureTextEntry={true} value={this.state.upwd}></TextInput>
            <Button title='登录' onPress={this.handlePress}></Button>
        </View>
    }
}