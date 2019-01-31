import React, {
    Component
} from 'react'
import {
    Text,View,TextInput,Button
} from 'react-native'

// 创建一个组件
export default class ToDoInput extends Component {
    constructor() { 
        super()
        this.state = {value:''}
    }
    handleChangeText = (msg) => { 
        this.setState({
            value: msg
        })
    }
    handlePress = () => { 
        var val = this.state.value
        this.props.func(val)
    }
    render() {
        return <View>
            <Text>待办事项列表</Text>
            <TextInput onChangeText={this.handleChangeText} placeholder='请输入事项'></TextInput>
            <Button onPress={this.handlePress} title='add'></Button>
        </View>
    }
}