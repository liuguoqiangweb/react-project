import React, {
    Component
} from 'react'
import {
    Text,FlatList
} from 'react-native'

// 创建一个组件
export default class Demo14Component extends Component {
    constructor() {
        super()
        var list = [];
        for (var i = 0; i < 100; i++) { 
            list.push({
                name: '商品' + i,
                key:i
            })
        }
        this.state = {
            myList: list
        }
    }
    showItem = (info) => { 
        return <Text>{info.item.name}</Text>
    }
    handleEndReached = () => { 
        var nowList = this.state.myList
        var length = nowList.length
        for (var i = 0; i < 10; i++) { 
            nowList.push({
                name: '商品' + (length + i),
                key: length + i
            })
        }
        this.setState({myList:nowList})
    }
    render() {
        return <FlatList onEndReached={this.handleEndReached} extraData={this.state} data={this.state.myList} renderItem={this.showItem}> </FlatList>
    }
}