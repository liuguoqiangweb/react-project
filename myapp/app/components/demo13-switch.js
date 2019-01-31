import React, {
    Component
} from 'react'
import {
    Text,Switch,KeyboardAvoidingView,TextInput,View
} from 'react-native'

// 创建一个组件
export default class Demo13Component extends Component {
    constructor() { 
        super()
        this.state = {isOpen:false}
    }
    handleChange = (msg) => { 
        nowStatus = this.state.isOpen
        this.setState({
            isOpen: msg
        })
    }
    render() {
        return <KeyboardAvoidingView>
            <View>
                <TextInput placeholder='用户名'></TextInput>
            </View>
            <Switch onValueChange={this.handleChange} value={this.state.isOpen} >
            </Switch>
        </KeyboardAvoidingView>
    }
}