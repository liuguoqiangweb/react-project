import React, {
    Component
} from 'react'
import {
    Text,View,Image
} from 'react-native'

// 创建一个组件
export default class Demo09Component extends Component {
    constructor() { 
        super()
        this.state = {
            imgUrl:'../imgs/3.jpg'
        }
    }
        
    render() {
        return <View>
            <Text> 这是第一个组件 </Text>
            {/* 本地资源 */}
            <Image style={{ width: 50, height: 50 }} source={require('../imgs/3.jpg')}></Image>
            {/* 网络资源 */}
            <Image style={{width:100,height:100}} source = {{
                    uri: 'http://176.52.12.5/3.jpg'
                }}> </Image>
        </View>
    }
}