import React, {
    Component
} from 'react'
import {
    Text,Button
} from 'react-native'

// 创建一个组件
export default class Demo16Component extends Component {
    handlePress = () => {
        // var url = 'http://jsonplaceholder.typicode.com/users'
        var url = 'http://176.52.12.5:3002/imagelist'
        fetch(url).then((response) => response.json()).then((result) => { 
            console.log(result)
        })
    }
    render() {
        return <Button title = '加载数据' onPress = {this.handlePress}></Button>
    }
}