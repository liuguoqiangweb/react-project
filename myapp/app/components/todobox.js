import React, {
    Component
} from 'react'
import {
    Text,View
} from 'react-native'
import ToDoList from './todolist'
import ToDoInput from './todoinput'

// 创建一个组件
export default class ToDoBox extends Component {
    constructor() {
        super()
        this.state = {
            myList:['吃饭']
        }
    }
    getMsg = (msg) => { 
        console.log('接收到输入的值为：' + msg)
        var nowList = this.state.myList
        nowList.push(msg)

        this.setState({
            myList: nowList
        })
    }
    delItem = (index) => { 
        var nowList = this.state.myList
        nowList.splice(index, 1)
        this.setState({myList:nowList})
    }
    render() {
        return <View>
            <ToDoInput func={this.getMsg}></ToDoInput>
            <ToDoList inputList={this.state.myList} funcDel={this.delItem}></ToDoList>
        </View>
    }
}