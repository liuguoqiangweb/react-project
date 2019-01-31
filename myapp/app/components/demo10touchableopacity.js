import React, {
    Component
} from 'react'
import {
    Text,TouchableOpacity
} from 'react-native'

// 创建一个组件
export default class Demo10Component extends Component {
    handlePress=()=> { 
        alert('text is pressed')
    }
    render() {
        return <TouchableOpacity onPress={this.handlePress}><Text> 这是第一个组件 </Text>
            </TouchableOpacity>
    }
}