import React, {
    Component
} from 'react'
import {
    Text,Fetch,FlatList,TouchableOpacity,View
} from 'react-native'

// 创建一个组件
export default class Demo19Component extends Component {
    constructor() { 
        super()
        this.state = {list:[]}
    }
    showItem = (info) => { 
        return <TouchableOpacity onPress={()=>this.handlePress(info.item.lid)}>
            <Text>{info.item.title}</Text>
        </TouchableOpacity>
    }
    handlePress = (lid) => { 
        this.props.navigation.navigate('detail', {id:lid}) //传参
    }
    componentDidMount() { 
        var url = 'http://176.52.12.5:8080/product/list'
        fetch(url)
            .then((response) => response.json())
            .then((result) => { 
                // 将请求回的数据存入状态里面的list数组
                this.setState({list:result.data})
            })
    }
    render() {
        return <FlatList data={this.state.list} renderItem={this.showItem} extraData={this.state}>
        </FlatList>
    }
}