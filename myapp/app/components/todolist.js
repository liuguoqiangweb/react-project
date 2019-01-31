import React, {
    Component
} from 'react'
import {
    Text,View,FlatList
}
from 'react-native'
import ToDoItem from './todoitem'

// 创建一个组件
export default class ToDoList extends Component {
    showItem = (info) => { 
        return <ToDoItem value={info.item} delFunc={()=>this.props.funcDel(info.index)}> </ToDoItem>
    }
    render() {
        console.log('ToDoList组件真正被渲染！')
        return <FlatList data={this.props.inputList} renderItem={this.showItem} extraData={this.props}>
        </FlatList>
    }
}