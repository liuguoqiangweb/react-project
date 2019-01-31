/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Demo01Component from './app/components/demo01'
import Demo02Component from './app/components/demo02-view'
import Demo03StateComponent from './app/components/demo03-state'
import Demo04StyleComponent from './app/components/demo04-style'
import Demo05StyleComponent from './app/components/demo05-style'
import Demo06Component from './app/components/demo06-textinput'
import Demo07Component from './app/components/demo07-flatlist'
import Demo08Component from './app/components/demo08-homework'
import Demo09Component from './app/components/demo09_img'
import Demo10Component from './app/components/demo10touchableopacity'
import Demo11Component from './app/components/demo11-ai'
import Demo12Component from './app/components/demo12-scrollview'
import Demo13Component from './app/components/demo13-switch'
import Demo14Component from './app/components/demo14-flatlist'
import Demo15Component from './app/components/demo15-flexbox'
import Demo16Component from './app/components/demo16-fetch'
// 将用来设置路由的工具引入进来
import { createStackNavigator } from 'react-navigation'
import Demo17Component from './app/components/demo17-login'
import Demo18Component from './app/components/demo18-main'
import Demo19Component from './app/components/demo19-list'
import Demo20Component from './app/components/demo20-detail'
import ToDoBox from './app/components/todobox'
import ToDoInput from './app/components/todoinput'
import ToDoList from './app/components/todolist'
import ToDoItem from './app/components/todoitem'


// 配置路由词典
var myNavigator = createStackNavigator({
  box: {
    screen: ToDoBox
  },
  list: {
    screen: Demo19Component
  },
  detail: {
    screen: Demo20Component
  },
  main: {
    screen: Demo18Component
  },
  login: {
    screen: Demo17Component
  }
})

export default class myapp extends Component {
  render() {
    return (
      <Demo16Component></Demo16Component>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
