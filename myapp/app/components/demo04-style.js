import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Demo04StyleComponent extends Component { 
    render() { 
        return <View>
            <Text style = {myStyles.myText}> 123 </Text>
            <Text style = {myStyles.myText}> 456 </Text>
            <Text style = {myStyles.myText}> 789 </Text>
        </View>
    }
}

// 创建要复用的样式类
var myStyles = StyleSheet.create({
    myText: {
        color: 'red',
        fontSize:40
    }
})