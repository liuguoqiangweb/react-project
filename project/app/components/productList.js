import React, {
    Component
} from 'react'
import {
    View, Text,Image,FlatList,TouchableOpacity
} from 'react-native'

export default class ProductListComponent extends Component {
    constructor() { 
        super()
        this.state = {list:[],nowPage:1,total:1}
    }
    componentDidMount() { 
        var url = 'http://176.52.12.5:8080/product/list'
        fetch(url).then((response) => response.json())
            .then((result) => { 
                for (var i = 0; i < result.data.length; i++) {    //给每个遍历对象加key
                    result.data[i].key = i
                }
                console.log(result)
                this.setState({ list: result.data ,total:result.pageCount})
            })
    }
    handleJump = (id) => { 
        this.props.navigation.navigate('detail', {lid:id})
    }
    showItem = (info) => { 
        return <TouchableOpacity onPress={()=>this.handleJump(info.item.lid)}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <Image style={{width:60,height:60,borderRadius:30,marginRight:20}} source={{uri:'http://176.52.12.5/'+info.item.pic}}></Image>
                <Text>{info.item.title}</Text>
            </View>
            <Text>{'\n'}</Text>
        </TouchableOpacity>
    }
    handleReached = () => { 
        console.log('准备加载更多...')
        var page = this.state.nowPage
        page++
        if (page > this.state.total) {
            return
        }
        var url = 'http://176.52.12.5:8080/product/list?pno='+page
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                // 请求下一页成功，把当前页码存到状态中，否则一直是第二页
                this.setState({ nowPage: page })
                // 把新得到的数组用concat API拼接到原数组
                var nowList = this.state.list;
                //遍历result.data对应的对象数组，给每个对象添加key
                var length = nowList.length
                for (var i = 0; i < result.data.length; i++) { 
                    result.data[i].key = length + i
                }
                nowList = nowList.concat(result.data)
                this.setState({
                    list: nowList
                })
            })
    }
    render() {
        return <FlatList data={this.state.list} renderItem={this.showItem} extraData={this.state} onEndReached={this.handleReached}>
        </FlatList>
    }
}