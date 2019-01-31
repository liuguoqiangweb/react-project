import React, {
    Component
} from 'react'
import {
    Text
} from 'react-native'

// 创建一个组件
export default class Demo20Component extends Component {
    componentDidMount() { 
        // 接收参数
        var myId = this.props.navigation.getParam('id')
        console.log(myId)
    }
    render() {
        return <Text> 这是详情页 </Text>
    }
}