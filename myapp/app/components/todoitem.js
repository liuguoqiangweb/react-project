import React, {
    Component
} from 'react'
import {
    Text,Button,View
} from 'react-native'

// 创建一个组件
export default class ToDoItem extends Component {
    handlePress = () => { 
        this.props.delFunc()
    }
    render() {
        return <View>
            <Button title='delete' onPress={this.handlePress}></Button>
            <Text>{this.props.value}</Text>
        </View>
    }
}