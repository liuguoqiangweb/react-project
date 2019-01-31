import React, {
    Component
} from 'react'
import {
    Text,Button
} from 'react-native'

// 创建一个组件
export default class Demo18Component extends Component {
    handlePress=()=> { 
        // 跳转到路由地址为login的Demo17LoginComponent
        console.log(this.props)
        this.props.navigation.navigate('login')
    }
    render() {
        return <Button title='登录' onPress={this.handlePress}> </Button>
    }
}