import React, {
    Component
} from 'react'
import {
    Text,View, TextInput
} from 'react-native'

// 创建一个组件
export default class Demo06Component extends Component {
    // 解决受控问题：
    // 1：初始化状态
    // 2: 把初始化的值绑定到元素上
    // 3: 把元素修改的值写入状态中
    constructor() {
        super()
        this.state = {value:'jack'}
    }
    handleChangeText =(val)=> { 
        console.log(val)
        this.setState({value:val})
    }
    render() {
        return <View>
            <Text> 这是一个组件 </Text>
            <TextInput placeholder='请输入用户名' secureTextEntry={false} value={this.state.value}
                onChangeText={this.handleChangeText}></TextInput>
        </View>
    }
}