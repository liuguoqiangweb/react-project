import React, { Component } from 'react'
import { View, Text, ScrollView, Button,Image } from 'react-native'
import Global from '../utinity/global'
export default class DetailComponent extends Component { 
    constructor() { 
        super()
        this.state = {
            details: {},
            nowIndex: 0,
            myTimer:null
        }
    }
    componentDidMount() { 
        var id = this.props.navigation.getParam('lid')
        console.log(id)
        var url = Global.baseUrl + '/product/detail?lid=' + id
        fetch(url).then((response) => response.json())
            .then((result) => { 
                console.log(result)
                this.setState({ details: result.details },
                    () => {
                        this.initTimer()
                    })
                    
            })
    }
    // 在组件销毁时，执行清理工作
    componentWillUnmount() { 
        clearInterval(this.state.myTimer)
    }
    initTimer=()=> { 
        var timer = setInterval(() => {
            var index = this.state.nowIndex;
            index++;

            // 边界值的判断
            var length = this.state.details.picList.length
            if (index >= length) {
                index = 0
            }
            this.setState({ nowIndex: index })
        }, 1000)
        this.setState({myTimer:timer})
    }
    render() { 
        return <View style={{flex:1}}>
            <ScrollView>
                {
                    this.state.details.picList &&
                    <Image style={{ width: 200, height: 200 }} source={{ uri: Global.baseImgUrl + this.state.details.picList[this.state.nowIndex].md}}></Image>
                }
                <Text> { this.state.details.title } </Text>
                <Text> { this.state.details.subtitle} </Text>
            </ScrollView>
            <Button color='red' title='加入购物车' onPress={() => {}}></Button>
        </View>
    }
}