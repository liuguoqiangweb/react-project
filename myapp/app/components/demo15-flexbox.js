import React, {
    Component
} from 'react'
import {
    Text,View
} from 'react-native'

// 创建一个组件
export default class Demo15Component extends Component {
    render() {
        return <View style={{height:100, backgroundColor:'powderblue',justifyContent:'center'}}>
            <Text> 这是第一个组件</Text>
            <View style={{ height: 100, backgroundColor: 'red',alignItems:'center' }}>
                <Text>水平居中</Text>
            </View>
        </View >
    }
}