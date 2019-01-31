import React, {
    Component
} from 'react'
import {
    Text,TextInput,View,Button,FlatList
} from 'react-native'

// 创建一个组件
export default class Demo08Component extends Component {
    constructor() {
        super()
        this.state = {myInput: '',list:[100,200]}
    }
    handleClick = () => {
        var nowVal = this.state.myInput
        var nowList = this.state.list
        nowList.push(nowVal)
        this.setState({ list: nowList })
    }
    showItem=(info)=> {
        return <Text>{info.item}</Text>
    }
    handleChangeText = (val) => {
        this.setState({ myInput: val})

     }
    render() {
        return <View>
            <Text>{'\n\n\n'}</Text>
            <TextInput onChangeText={this.handleChangeText}></TextInput> 
            <Button onPress = {this.handleClick} title = 'add' ></Button>
            <FlatList data={this.state.list} extraData={this.state} renderItem={this.showItem}></FlatList>
        </View>
    }
}