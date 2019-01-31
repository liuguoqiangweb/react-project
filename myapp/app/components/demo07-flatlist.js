import React, {
    Component
} from 'react'
import {
    Text,FlatList
} from 'react-native'

// 创建一个组件
export default class Demo07Component extends Component {
    showItem = (info) => { 
        console.log(info)
        return <Text>{info.item}</Text>
    }
    render() {
        return <FlatList data={[100, 200, 300]} renderItem={this.showItem}>
        </FlatList>
    }
}