import React, {
    Component
} from 'react'
import {
    Text,ActivityIndicator,Button,View
} from 'react-native'

// 创建一个组件
export default class Demo11Component extends Component {
    constructor() { 
        super()
        this.state = {isShow:false}
    }
    hanelePress=()=> { 
        this.setState({
            isShow: true
        })
    }
    render() {
        return <View>
            <Button title='刷新' onPress={this.hanelePress}></Button>
            {
                this.state.isShow && 
                <ActivityIndicator color='red' size='large'></ActivityIndicator>
            }
        </View>
    }
}