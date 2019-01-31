import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'

export default class Demo03StateComponent extends Component {
    // 状态的初始化放在结构函数中
    constructor() {
        super()
        this.state = {count:1}
    }

    handlePress= ()=>{ 
        console.log('btn is pressed')
        var nowCount = this.state.count
        nowCount++
        this.setState({count:nowCount})
    }
    render() { 
        return <View>
            <Text style={{ opacity: 0.5 }}>{this.state.count}</Text>
            < Button title='clickMe' onPress={this.handlePress} > </Button>
        </View>
    }
}