import React, {
    Component
} from 'react'
import {
    Text,ScrollView,Button,View
} from 'react-native'

// 创建一个组件
export default class Demo12Component extends Component {
    constructor() { 
        super()
        var list= []
        for (var i = 0; i < 50; i++) { 
            list.push('商品'+i)
        }
        this.state = { myList: list }
    }
    render() {
        return <View style={{flex:1}}>
            < ScrollView showsHorizontalScrollIndicator = {true} >
            {
                this.state.myList.map((value,index) => {
                    return <Text> {value} </Text>
                })
            }
            </ScrollView > 
            < View>
                <Button title='加载更多'> </Button>
            </View>
        </View>
        
    }
}